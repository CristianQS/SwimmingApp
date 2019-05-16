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
            activity = request.query_params['activityid']
            chornos = Chrono.objects.filter(activity=activity).values()
            if len(chornos) == 0:
                return Response([{'msg': 'No Chrono found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(chornos, status=status.HTTP_200_OK)
        except Chrono.DoesNotExist:
            return Response([{'msg': 'No Chrono found'}], status=status.HTTP_404_NOT_FOUND)
        except:
            return Response([{'msg': 'Missing params'}], status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, *args, **kwargs):
        serializer = ChronoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ChronoViewById(APIView):
    def get(self, request, *args, **kwargs):
        try:
            chronoid = kwargs['id']
            queryset = Chrono.objects.filter(id=chronoid).values()
            if len(queryset) == 0:
                return Response([{'msg': 'No Chrono found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(queryset, status=status.HTTP_200_OK)
        except Chrono.DoesNotExist:
            return Response([{'msg': 'No Chrono found'}], status=status.HTTP_404_NOT_FOUND)
        except:
            return Response([{'msg': 'Missing params'}], status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        try:
            chrono = Chrono.objects.get(id=kwargs['id'])
            chrono.delete()
            return Response({"message": "Activity with id `{}` "
                            "has been deleted.".format(kwargs['id'])}, status=status.HTTP_204_NO_CONTENT)
        except Chrono.DoesNotExist:
            return Response({"message": "Activity Not Found"}, status=status.HTTP_404_NOT_FOUND)
