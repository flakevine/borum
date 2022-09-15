from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Guides
from .serializers import GuidesSerializer
from rest_framework import status, viewsets
from django.shortcuts import get_object_or_404


class Guides(viewsets.ModelViewSet):
    queryset = Guides.objects.all()
    serializer_class = GuidesSerializer