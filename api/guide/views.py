from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Guides
from .serializers import GuidesSerializer
# from rest_framework import status
from django.shortcuts import get_object_or_404


@api_view(['GET'])
def guides(request):
    queryset = Guides.objects.all()
    serializer = GuidesSerializer(queryset, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def guide(request, id):
    guide = get_object_or_404(Guides, pk = id)
    serializer = GuidesSerializer(guide)
    return Response(serializer.data)