# Generated by Django 2.2 on 2019-05-04 02:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trainings', '0005_remove_training_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='training',
            name='description',
            field=models.TextField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='training',
            name='timetraining',
            field=models.BigIntegerField(default=1556935577),
        ),
    ]
