from django.db import models
from trainings.models import Training


# Create your models here.
class Activity(models.Model):
    training = models.ForeignKey(Training, on_delete=models.CASCADE, null=True)
    series = models.IntegerField()
    meters = models.IntegerField()
    exercise = models.TextField(max_length=20)
    style = models.TextField(max_length=20)
    type = models.TextField(max_length=20)
    rhythm = models.TextField(max_length=20)

    def __str__(self):
        return str(self.series)+'x'+str(self.meters)+' '+self.exercise
