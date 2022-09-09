from functools import partial
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import CreateUpdateUserSerializer, GetUserSerializer
# Create your views here.

@api_view(['GET', 'POST'])
def many_users(request):
    match request.method:
        case "GET":
            query = User.objects.all()
            serialized = GetUserSerializer(query, many=True)
            return Response(serialized.data)
        case "POST":
            serialized = CreateUpdateUserSerializer(data=request.data)
            serialized.is_valid(raise_exception=True)
            serialized.save()
            return Response(serialized.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def one_user(request, id):
    user = get_object_or_404(User, pk=id)
    match request.method:
        case "GET":
            serialized = GetUserSerializer(user)
            return Response(serialized.data)
        case "PUT":
            serialized = CreateUpdateUserSerializer(user, data=request.data)
            serialized.is_valid(raise_exception=True)
            serialized.save()
            return Response(serialized.data, status=status.HTTP_200_OK)
        case "PATCH":
            serialized = CreateUpdateUserSerializer(user, data=request.data, partial=True)
            serialized.is_valid(raise_exception=True)
            serialized.save()
            return Response(serialized.data, status=status.HTTP_200_OK)
        case "DELETE":
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        


