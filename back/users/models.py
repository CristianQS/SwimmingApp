from django.db import models

# Create your models here.


class User(models.Model):
    username = models.TextField(max_length=20)
    password = models.TextField(max_length=64)
    email = models.TextField(max_length=30)
    description = models.TextField(max_length=150, null=True)
    USER_TYPE_CHOICES = (
        (1, 'swimmer'),
        (2, 'trainer'),
    )

    userType = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=1)

    def __str__(self):
        return self.email
