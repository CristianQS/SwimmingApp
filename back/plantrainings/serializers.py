from rest_framework import serializers
from .models import PlanTraining


class PlanTrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlanTraining
        fields = '__all__'
