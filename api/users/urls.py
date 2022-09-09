from django.urls import path
from . import views

urlpatterns = [
    path('', views.many_users),
    path('<int:id>', views.one_user),
]
