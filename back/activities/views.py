from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Activity
from .serializers import ActivitySerializer
from users.views import Authenticate

# Create your views here.


class ActivitiesView(APIView):
    def get(self, request,*args, **kwargs):
        try:
            Authenticate().get(request)
            queryset = Activity.objects.all()
            training = kwargs['training']
            plantraining = kwargs['plantraining']
            activities = queryset.filter(training=training, plantraining=plantraining).values()
            if len(activities) == 0:
                return Response([{'msg': 'No activity found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(activities, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Activity.DoesNotExist:
            return Response([{'msg': 'No activity found'}], status=status.HTTP_404_NOT_FOUND)

    def post(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            serializer = ActivitySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)


class ActivitiesById (APIView):
    def get(self, request,*args, **kwargs):
        try:
            Authenticate().get(request)
            queryset = Activity.objects.all()
            plantraining = kwargs['plantraining']
            training = kwargs['training']
            activities = queryset.filter(training=training, plantraining=plantraining,
                                         id=kwargs['id']).values()
            if len(activities) == 0:
                return Response([{'msg': 'No activity found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(activities, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Activity.DoesNotExist:
            return Response([{'msg': 'No activity found'}], status=status.HTTP_404_NOT_FOUND)

    def put(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            activity = Activity.objects.get(id=kwargs['id'])
            serializer = ActivitySerializer(instance=activity, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Activity.DoesNotExist:
            return Response([{'msg': 'No activity found'}], status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            activity = Activity.objects.get(id=kwargs['id'])
            activity.delete()
            return Response({"message": "Activity with id `{}` "
                            "has been deleted.".format(kwargs['id'])}, status=status.HTTP_204_NO_CONTENT)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Activity.DoesNotExist:
            return Response({"message": "Activity Not Found"}, status=status.HTTP_404_NOT_FOUND)
