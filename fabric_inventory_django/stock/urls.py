from django.urls import path
from . import views

urlpatterns = [
    path('', views.StockList.as_view(), name='stock_list'),
    path('view/<int:pk>', views.StockView.as_view(), name='stock_view'),
    path('new', views.StockCreate.as_view(), name='stock_new'),
    path('view/<int:pk>', views.StockView.as_view(), name='stock_view'),
    path('edit/<int:pk>', views.StockUpdate.as_view(), name='stock_edit'),
    path('delete/<int:pk>', views.StockDelete.as_view(), name='stock_delete'),
]