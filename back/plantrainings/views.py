from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import PlanTraining
from .serializers import PlanTrainingSerializer
from users.views import Authenticate


# Create your views here.


class PlanTrainingsView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            user = request.query_params['userid']
            queryset = PlanTraining.objects.filter(user=user)
            serializer = PlanTrainingSerializer(queryset, many=True, read_only=True)
            plantrainings = queryset.filter(user=user).values()
            if len(plantrainings) == 0:
                return Response([{'msg': 'No plantraining found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(serializer.data, status=status.HTTP_200_OK)
        except PlanTraining.DoesNotExist:
            return Response([{'msg': 'No plantraining found'}], status=status.HTTP_404_NOT_FOUND)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except:
            return Response([{'msg': 'Missing params'}], status=status.HTTP_400_BAD_REQUEST)

    def post(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            serializer = PlanTrainingSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)


class PlanTrainingById(APIView):
    def get(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            queryset = PlanTraining.objects.all()
            plantraining = queryset.filter(id=kwargs['id']).values()
            if len(plantraining) == 0:
                return Response([{'msg': 'No plantraining found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(plantraining, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except PlanTraining.DoesNotExist:
            return Response([{'msg': 'No plantraining found'}], status=status.HTTP_404_NOT_FOUND)

    def put(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            plantraining = PlanTraining.objects.get(id=kwargs['id'])
            serializer = PlanTrainingSerializer(instance=plantraining, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except PlanTraining.DoesNotExist:
            return Response([{'msg': 'No plantraining found'}], status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            activity = PlanTraining.objects.get(id=kwargs['id'])
            activity.delete()
            return Response({"message": "PlanTraining with id `{}` "
                                        "has been deleted.".format(kwargs['id'])}, status=status.HTTP_204_NO_CONTENT)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except PlanTraining.DoesNotExist:
            return Response({"message": "PlanTraining Not Found"}, status=status.HTTP_404_NOT_FOUND)
