# Generated by Django 3.0.3 on 2020-05-01 07:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stock', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Stock',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fabric_description', models.CharField(max_length=500)),
                ('fabric_type', models.CharField(max_length=50)),
                ('fabric_subtype', models.CharField(max_length=50)),
                ('fabric_color', models.CharField(max_length=50)),
                ('fabric_subcolor', models.CharField(max_length=50)),
                ('fabric_length_stock', models.IntegerField()),
                ('fabric_width', models.IntegerField()),
                ('fabric_cost', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
        migrations.DeleteModel(
            name='Book',
        ),
    ]
