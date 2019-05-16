from django.db import models
from users.models import User
from activities.models import Activity
# Create your models here.


class Chrono(models.Model):
    time = models.TextField(max_length=10)
    timechrono = models.BigIntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity = models.OneToOneField(Activity, on_delete=models.CASCADE)

    def __str__(self):
        return self.time
