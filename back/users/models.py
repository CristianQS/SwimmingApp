from django.db import models

# Create your models here.


class User(models.Model):
    username = models.TextField(max_length=20)
    password = models.TextField(max_length=64)
    email = models.TextField(max_length=30)

    def __str__(self):
        return self.email
