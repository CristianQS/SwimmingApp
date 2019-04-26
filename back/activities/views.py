from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Activity
from .serializers import ActivitySerializer
# Create your views here.


class ActivitiesView(APIView):
    def get(self, request,*args, **kwargs):
        try:
            queryset = Activity.objects.all()
            training = kwargs['training']
            activities = queryset.filter(training=training).values()
            return Response(activities, status=status.HTTP_200_OK)
        except Activity.DoesNotExist:
            return Response([{'msg': 'No activity found'}], status=status.HTTP_404_NOT_FOUND)

    def post(self, request, *args, **kwargs):
        serializer = ActivitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self,request, *args, **kwargs):
        try:
            activity = Activity.objects.get(id=kwargs['id'])
            serializer = ActivitySerializer(instance=activity, data=request.data,partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)
        except Activity.DoesNotExist:
            return Response([{'msg': 'No activity found'}], status=status.HTTP_404_NOT_FOUND)

    def delete(self,request, *args, **kwargs):
        try:
            activity = Activity.objects.get(id=kwargs['id'])
            activity.delete()
            return Response({"message": "Activity with id `{}` "
                            "has been deleted.".format(kwargs['id'])}, status=status.HTTP_204_NO_CONTENT)
        except Activity.DoesNotExist:
            return Response({"message": "Activity Not Found"}, status=status.HTTP_404_NOT_FOUND)