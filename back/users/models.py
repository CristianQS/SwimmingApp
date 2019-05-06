from django.db import models

# Create your models here.


class User(models.Model):
    username = models.TextField(max_length=20)
    password = models.TextField(max_length=32)
    email = models.TextField(max_length=30)
    description = models.TextField(max_length=150, null=True)
    USER_TYPE_CHOICES = (
        (1, 'swimmer'),
        (2, 'trainer'),
    )

    userType = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=1)

    CLUB_CHOICES = (
        (1, 'CN Las Palmas'),
        (2, 'CN Fainagua C. Telde'),
        (3, 'CN Salinas Sta.Lucia'),
        (4, 'CN Metropole'),

    )

    club = models.PositiveSmallIntegerField(choices=CLUB_CHOICES, default=1)

    def __str__(self):
        return self.email
