from django.db import models
from authentication.models import User


class Lead(models.Model):
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE,null=True)

class Customer(models.Model):
    lead = models.OneToOneField(Lead, on_delete=models.CASCADE,null=True)
    # photo = models.ImageField(upload_to='photos/')
    annual_earning = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)
    products_of_interest = models.CharField(max_length=100)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE,null=True)