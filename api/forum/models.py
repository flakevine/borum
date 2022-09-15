from django.db import models
from users import models as user

class Posts(models.Model):
    title = models.CharField(max_length=69, null=False)
    body = models.TextField(null=False)
    user_id = models.ForeignKey(user.User, on_delete=models.PROTECT)

# class PostsComments(models.Model)
