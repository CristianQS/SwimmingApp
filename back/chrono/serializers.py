from rest_framework import serializers
from .models import Chrono


class ChronoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chrono
        fields = '__all__'
