from django.db import models
from plantrainings.models import PlanTraining

# Create your models here.


class Training(models.Model):
    planTraining = models.ForeignKey(PlanTraining, on_delete=models.CASCADE, null=True)
    name = models.TextField(max_length=20)
    description = models.TextField(max_length=50)

    def __str__(self):
        return self.name
