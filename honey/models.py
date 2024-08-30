from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Transaction(models.Model):
    
    options = (
        ('Expense', 'Expense'),
        ('Income', 'Income'),
    )
    
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.IntegerField()
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=20, choices=options)
    
    def __str__(self) -> str:
        return f'{self.type} of {self.amount} on {self.title} by {self.owner.username}'