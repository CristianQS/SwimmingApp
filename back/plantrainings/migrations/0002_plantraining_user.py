# Generated by Django 2.2 on 2019-04-27 19:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('plantrainings', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='plantraining',
            name='user',
            field=models.ManyToManyField(to='users.User'),
        ),
    ]