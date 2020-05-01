from django.http import HttpResponse
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy

from stock.models import Stock

class StockList(ListView):
    model = Stock

class StockView(DetailView):
    model = Stock

class StockCreate(CreateView):
    model = Stock
    fields = ['fabric_type', 'fabric_subtype', 'fabric_color', 'fabric_subcolor', 'fabric_length_stock', 'fabric_width', 'fabric_cost']
    success_url = reverse_lazy('stock_list')

class StockUpdate(UpdateView):
    model = Stock
    fields = ['fabric_type', 'fabric_subtype', 'fabric_color', 'fabric_subcolor', 'fabric_length_stock', 'fabric_width', 'fabric_cost']
    success_url = reverse_lazy('stock_list')

class StockDelete(DeleteView):
    model = Stock
    success_url = reverse_lazy('stock_list')