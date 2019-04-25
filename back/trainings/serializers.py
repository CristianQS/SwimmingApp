from rest_framework import serializers
from .models import Training


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = '__all__'