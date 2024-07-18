from django.db import models

# Create your models here.

class Cuisine(models.Model):
    name = models.CharField(max_length = 200)
    region = models.CharField(max_length=200)
    popular_ingredients = models.CharField(max_length=200)
    popular_dishes = models.CharField(max_length=200)
    # img = models.CharField(max_length=200)

    # user = models.ForeignKey(User, on_delete=models.CASCADE) #one to many
    
    # restaurants = models.ManyToManyField(Restaurant)
    def __str__(self):
        return self.name



class Restaurant(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length = 200)
    favorite_dish= models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    body = models.CharField(max_length = 5000)
    cuisines = models.ManyToManyField(Cuisine)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
