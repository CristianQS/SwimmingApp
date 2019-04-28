import jwt

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User
from .serializers import UserSerializer


class CreateUser(APIView):

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Login(APIView):

    def post(self, request, *args, **kwargs):
        if not request.data:
            return Response({'Error': "Please provide username/password"}, status="400")

        email = request.data['email']
        password = request.data['password']
        try:
            user = User.objects.get(email=email, password=password)
        except User.DoesNotExist:
            return Response({'Error': "Invalid username/password"}, status=status.HTTP_400_BAD_REQUEST)
        if user:
            payload = {
                'id': user.id,
                'email': user.email,
            }
            jwt_token = {'token': jwt.encode(payload, "SECRET_KEY")}
            print(jwt_token)
            return Response(
                jwt_token,
                status=status.HTTP_200_OK,
                content_type="application/json"
            )
        else:
            return Response(
                {'Error': "Invalid credentials"},
                status=status.HTTP_400_BAD_REQUEST,
                content_type="application/json"
            )


class FindUserByName(APIView):
    def get(self, request, *args, **kwargs):
        try:
            users = User.objects.all()
            username = request.data['username']
            users_result = users.filter(username__icontains=username).values()
            print(type(users))
            return Response(users_result, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response([{'msg': 'User Does not exist'}], status=status.HTTP_404_NOT_FOUND)
        except:
            return Response([{'msg': 'Missing params'}], status=status.HTTP_400_BAD_REQUEST)


class UsersById(APIView):
    def get(self, request,*args, **kwargs):
        try:
            queryset = User.objects.all()
            user = queryset.filter(id=kwargs['id']).values()
            if len(user) == 0:
                return Response([{'msg': 'No user found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(user, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response([{'msg': 'No user found'}], status=status.HTTP_404_NOT_FOUND)

    def put(self,request, *args, **kwargs):
        try:
            user = User.objects.get(id=kwargs['id'])
            serializer = UserSerializer(instance=user, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)
        except User.DoesNotExist:
            return Response([{'msg': 'No user found'}], status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, *args, **kwargs):
        try:
            activity = User.objects.get(id=kwargs['id'])
            activity.delete()
            return Response({"message": "User with id `{}` "
                            "has been deleted.".format(kwargs['id'])}, status=status.HTTP_204_NO_CONTENT)
        except User.DoesNotExist:
            return Response({"message": "PlanTraining Not Found"}, status=status.HTTP_404_NOT_FOUND)