from django.urls import path, include
from stock import views

urlpatterns = [
    path('stock/', include('stock.urls')),
]