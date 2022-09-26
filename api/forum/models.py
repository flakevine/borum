from django.db import models
from users import models as user

class Posts(models.Model):
    title = models.CharField(max_length=69, null=False)
    body = models.TextField(null=False)
    tags = models.CharField(max_length=255, null=False)
    user_id = models.ForeignKey(user.User, on_delete=models.PROTECT)

    def __str__(self) -> str:
        return str(self.id)
