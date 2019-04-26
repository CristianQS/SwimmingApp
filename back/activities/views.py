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
            return Response([{'msg': 'No reservations found'}], status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = ActivitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
