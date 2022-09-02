from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=30, null=False)
    password = models.CharField(max_length=24, null=False)
    description = models.CharField(max_length=255)
