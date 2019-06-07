from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Chrono
from .serializers import ChronoSerializer
from users.views import Authenticate
# Create your views here.


class ChronoView (APIView):
    def get(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            if request.query_params.get('activityid'):
                activity = request.query_params['activityid']
                chornos = Chrono.objects.filter(activity=activity).values()
            if request.query_params.get('userid'):
                user = request.query_params['userid']
                chornos = Chrono.objects.\
                    filter(user=user).values('time','timechrono','user','activity__series',
                                             'activity__meters','activity__exercise','activity__style',
                                             'activity__id')
            if len(chornos) == 0:
                return Response([{'msg': 'No Chrono found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(chornos, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Chrono.DoesNotExist:
            return Response([{'msg': 'No Chrono found'}], status=status.HTTP_404_NOT_FOUND)
        except:
            return Response([{'msg': 'Missing params'}], status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            serializer = ChronoSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)


class ChronoViewById(APIView):
    def get(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            chronoid = kwargs['id']
            queryset = Chrono.objects.filter(id=chronoid).values()
            if len(queryset) == 0:
                return Response([{'msg': 'No Chrono found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(queryset, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Chrono.DoesNotExist:
            return Response([{'msg': 'No Chrono found'}], status=status.HTTP_404_NOT_FOUND)
        except:
            return Response([{'msg': 'Missing params'}], status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            chrono = Chrono.objects.get(id=kwargs['id'])
            chrono.delete()
            return Response({"message": "Chrono with id `{}` "
                            "has been deleted.".format(kwargs['id'])}, status=status.HTTP_204_NO_CONTENT)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Chrono.DoesNotExist:
            return Response({"message": "Chrono Not Found"}, status=status.HTTP_404_NOT_FOUND)
