# Generated by Django 2.2 on 2019-04-29 21:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('plantrainings', '0002_plantraining_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='plantraining',
            name='user',
        ),
        migrations.AddField(
            model_name='plantraining',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, to='users.User'),
        ),
    ]
