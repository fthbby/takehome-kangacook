from django.shortcuts import render
from rest_framework import viewsets
from .models import Restaurant, Cuisine
from .serializers import RestaurantSerializer, CuisineSerializer
# Create your views here.

class RestaurantView(viewsets.ModelViewSet):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()


class CuisineView(viewsets.ModelViewSet):
    serializer_class = CuisineSerializer
    queryset = Cuisine.objects.all()
