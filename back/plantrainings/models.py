from django.db import models
from users.models import User


# Create your models here.
class PlanTraining(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT,default=1)
    name = models.TextField(max_length=20)
    description = models.TextField(max_length=50)

    def __str__(self):
        return self.name
