from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    name = models.CharField(max_length=30, null=False, unique=True)
    email = models.CharField(max_length=30, null=False, unique=True)
    password = models.CharField(max_length=24, null=False)
    username = models.CharField(max_length=30, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']