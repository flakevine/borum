from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import GetUserSerializer
# Create your views here.

@api_view(['GET'])
def users(request):
    if request.method == 'GET':
        query = User.objects.all()
        serialized = GetUserSerializer(query, many=True)
        return Response(serialized.data)
