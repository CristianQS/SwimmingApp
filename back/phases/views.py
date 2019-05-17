from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Phases
from .serializers import PhaseSerializer
# Create your views here.


class PhaseView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            chrono = kwargs['idchrono']
            queryset = Phases.objects.filter(chrono=chrono).values()
            if len(queryset) == 0:
                return Response([{'msg': 'No activity found'}], status=status.HTTP_404_NOT_FOUND)
            else:
                return Response(queryset, status=status.HTTP_200_OK)
        except Phases.DoesNotExist:
            return Response([{'msg': 'No activity found'}], status=status.HTTP_404_NOT_FOUND)

    def post(self, request, *args, **kwargs):
        serializer = PhaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)