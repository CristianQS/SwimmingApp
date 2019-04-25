from django.db import models


# Create your models here.
class Activity(models.Model):
    training = models.ForeignKey(models, on_delete=models.CASCADE)
    series = models.IntegerField()
    meters = models.IntegerField()
    exercise = models.TextField(max_length=20)
    style = models.TextField(max_length=20)
    type = models.TextField(max_length=20)
    rhythm = models.TextField(max_length=20)

    def __str__(self):
        return self.series+'x'+self.meters+' '+self.exercise
