from django.db import models
from django.urls import reverse

class Stock(models.Model):
    fabric_description = models.CharField(max_length=500)
    fabric_type = models.CharField(max_length=50)
    fabric_subtype = models.CharField(max_length=50)
    fabric_color = models.CharField(max_length=50)
    fabric_subcolor = models.CharField(max_length=50)
    fabric_length_stock = models.IntegerField()
    fabric_width = models.IntegerField()
    fabric_cost = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.fabric_description

    def get_absolute_url(self):
        return reverse('stock_edit', kwargs={'pk': self.pk})