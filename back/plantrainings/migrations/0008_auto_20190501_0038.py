# Generated by Django 2.2 on 2019-05-01 00:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plantrainings', '0007_auto_20190501_0036'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plantraining',
            name='user',
            field=models.ManyToManyField(to='users.User'),
        ),
    ]