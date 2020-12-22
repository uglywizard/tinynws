from .models import NearEarthObject
from rest_framework import serializers


class ListNearEarthObjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ["id", "name", "close_approach_date", "is_potentially_hazardous"]
        model = NearEarthObject


class DetailNearEarthObjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = NearEarthObject
