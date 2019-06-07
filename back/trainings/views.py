from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Training
from .serializers import TrainingSerializer
from users.views import Authenticate

# Create your views here.


class TrainingsView(APIView):
    def get(self, request,*args, **kwargs):
        try:
            Authenticate().get(request)
            queryset = Training.objects.all()
            plantraining = kwargs['plantraining']
            plantrainings = queryset.filter(plantraining=plantraining).values()
            if len(plantrainings) == 0:
                return Response([{'msg': 'No training found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(plantrainings, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Training.DoesNotExist:
            return Response([{'msg': 'No training found'}], status=status.HTTP_404_NOT_FOUND)

    def post(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            serializer = TrainingSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)


class TrainingById (APIView):
    def get(self, request,*args, **kwargs):
        try:
            Authenticate().get(request)
            queryset = Training.objects.all()
            training = queryset.filter(plantraining=kwargs['plantraining'], id=kwargs['id']).values()
            if len(training) == 0:
                return Response([{'msg': 'No training found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(training, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Training.DoesNotExist:
            return Response([{'msg': 'No activity found'}], status=status.HTTP_404_NOT_FOUND)

    def put(self,request, *args, **kwargs):
        try:
            Authenticate().get(request)
            training = Training.objects.get(id=kwargs['id'])
            serializer = TrainingSerializer(instance=training, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Training.DoesNotExist:
            return Response([{'msg': 'No training found'}], status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            activity = Training.objects.get(id=kwargs['id'])
            activity.delete()
            return Response({"message": "Training with id `{}` "
                            "has been deleted.".format(kwargs['id'])}, status=status.HTTP_204_NO_CONTENT)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Training.DoesNotExist:
            return Response({"message": "Training Not Found"}, status=status.HTTP_404_NOT_FOUND)
