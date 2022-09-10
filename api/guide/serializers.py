from rest_framework import serializers
from .models import Guides

class GuidesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guides
        fields = ('__all__')