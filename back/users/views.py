import jwt

# Create your views here.
from jwt import exceptions
from rest_framework import status
from rest_framework.authentication import get_authorization_header
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User
from .serializers import UserSerializer
from .TokenAuthentication import TokenAuthentication


class CreateUser(APIView):

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        queryset = User.objects.all()
        user = queryset.filter(email=request.data['email']).values()
        if len(user):
            return Response({'error': 'Email registered'}, status=status.HTTP_409_CONFLICT)
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            payload = {
                'id': serializer.data['id'],
                'email': serializer.data['email'],
            }
            jwt_token = {'token': jwt.encode(payload, "SECRET_KEY")}
            return Response(
                jwt_token,
                status=status.HTTP_201_CREATED,
                content_type="application/json"
            )
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
            Authenticate().get(request)
            users = User.objects.all()
            username = request.data['username']
            users_result = users.filter(username__icontains=username).values()
            print(type(users))
            return Response(users_result, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist:
            return Response([{'msg': 'User Does not exist'}], status=status.HTTP_404_NOT_FOUND)
        except:
            return Response([{'msg': 'Missing params'}], status=status.HTTP_400_BAD_REQUEST)


class UsersById(APIView):
    def get(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            queryset = User.objects.all()
            user = queryset.filter(id=kwargs['id']).values()
            if len(user) == 0:
                return Response([{'msg': 'No user found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(user, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist:
            return Response([{'msg': 'No user found'}], status=status.HTTP_404_NOT_FOUND)

    def put(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            user = User.objects.get(id=kwargs['id'])
            serializer = UserSerializer(instance=user, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist:
            return Response([{'msg': 'No user found'}], status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            user = User.objects.get(id=kwargs['id'])
            user.delete()
            return Response({"message": "User with id `{}` "
                                        "has been deleted.".format(kwargs['id'])}, status=status.HTTP_204_NO_CONTENT)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)

        except User.DoesNotExist:
            return Response({"message": "User Not Found"}, status=status.HTTP_404_NOT_FOUND)


class Authenticate(APIView):
    def get(self, request):
        auth = get_authorization_header(request).split()
        if auth[0] != b'Bearer':
            return Response({'Error': "Internal server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        if len(auth) == 1:
            msg = 'Invalid token header. No credentials provided.'
            raise exceptions.AuthenticationFailed(msg)
        elif len(auth) > 2:
            msg = 'Invalid token header'
            raise exceptions.AuthenticationFailed(msg)
        try:
            token = auth[1]
            if token == "null":
                msg = 'Null token not allowed'
                raise exceptions.AuthenticationFailed(msg)
        except UnicodeError:
            msg = 'Invalid token header. Token string should not contain invalid characters.'
            raise exceptions.AuthenticationFailed(msg)
        [user, token] = self.authenticate_credentials(token)
        return Response(user, status=status.HTTP_200_OK)

    def authenticate_credentials(self, token):
        payload = jwt.decode(token, "SECRET_KEY")
        email = payload['email']
        userid = payload['id']
        try:
            queryset = User.objects.all()
            user = queryset.filter(id=userid, email=email).values('id', 'username', 'email', 'description',
                                                                  'userType', 'club')
        except jwt.ExpiredSignature or jwt.DecodeError or jwt.InvalidTokenError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist:
            return Response({'Error': "Internal server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return user, token

    def authenticate_header(self, request):
        return 'Token'


class UsersByClub(APIView):
    def get(self,request,*args, **kwargs):
        try:
            Authenticate().get(request)
            queryset = User.objects.all()
            users = queryset.filter(club=kwargs['id']).values()
            if len(users) == 0:
                return Response([{'msg': 'No users found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(users, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist:
            return Response([{'msg': 'No user found'}], status=status.HTTP_404_NOT_FOUND)
