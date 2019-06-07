from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Phases
from .serializers import PhaseSerializer
from users.views import Authenticate

# Create your views here.


class PhaseView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            chrono = kwargs['idchrono']
            queryset = Phases.objects.filter(chrono=chrono).values()
            if len(queryset) == 0:
                return Response([{'msg': 'No phase found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(queryset, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except Phases.DoesNotExist:
            return Response([{'msg': 'No phase found'}], status=status.HTTP_404_NOT_FOUND)

    def post(self, request, *args, **kwargs):
        try:
            Authenticate().get(request)
            serializer = PhaseSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except IndexError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)