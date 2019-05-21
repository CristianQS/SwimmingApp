from django.db import models
from users.models import User


# Create your models here.
class PlanTraining(models.Model):
    user = models.ManyToManyField(User)
    name = models.TextField(max_length=20)
    description = models.TextField(max_length=150)

    def __str__(self):
        return self.name
