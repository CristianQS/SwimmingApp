from django.db import models
from chrono.models import Chrono
# Create your models here.


class Phases(models.Model):
    timePhase = models.TextField(max_length=10)
    chrono = models.ForeignKey(Chrono, on_delete=models.CASCADE)
    meters = models.IntegerField()

    def __str__(self):
        return self.timePhase
