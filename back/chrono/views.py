from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Chrono
from .serializers import ChronoSerializer
# Create your views here.


class ChronoView (APIView):
    def get(self, request, *args, **kwargs):
        try:
            user = request.query_params['userid']
            queryset = Chrono.objects.filter(user=user)
            serializer = ChronoSerializer(queryset, many=True, read_only=True)
            chornos = queryset.filter(user=user).values()
            if len(chornos) == 0:
                return Response([{'msg': 'No plantraining found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(serializer.data, status=status.HTTP_200_OK)
        except Chrono.DoesNotExist:
            return Response([{'msg': 'No plantraining found'}], status=status.HTTP_404_NOT_FOUND)
        except:
            return Response([{'msg': 'Missing params'}], status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, *args, **kwargs):
        serializer = ChronoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

