# Generated by Django 2.2 on 2019-05-01 00:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('plantrainings', '0008_auto_20190501_0038'),
    ]

    operations = [
        migrations.RenameField(
            model_name='plantraining',
            old_name='user',
            new_name='userid',
        ),
    ]
