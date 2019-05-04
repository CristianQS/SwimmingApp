from django.db import models
from plantrainings.models import PlanTraining

# Create your models here.


class Training(models.Model):
    plantraining = models.ForeignKey(PlanTraining, on_delete=models.CASCADE)
    name = models.TextField(max_length=20)
    description = models.TextField(max_length=50,default="")
    timetraining = models.BigIntegerField(default=1556935577)

    def __str__(self):
        return self.name
