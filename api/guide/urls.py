from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.guides),
    path('posts/<int:id>', views.guide),
]