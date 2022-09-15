from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('posts', views.Guides, basename='guias')

urlpatterns = router.urls