from rest_framework import serializers
from .models import Phases


class PhaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phases
        fields = '__all__'