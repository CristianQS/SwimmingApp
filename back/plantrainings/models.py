from django.db import models


# Create your models here.
class PlanTraining(models.Model):
    name = models.TextField(max_length=20)
    description = models.TextField(max_length=50)

    def __str__(self):
        return self.name
