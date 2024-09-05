from django.db import models


class Transaction(models.Model):
    
    options = (
        ('Expense', 'Expense'),
        ('Income', 'Income'),
    )
    
    amount = models.IntegerField()
    title = models.CharField(max_length=255)
    type = models.CharField(max_length=20, choices=options)
    
    def __str__(self) -> str:
        return f'{self.type} of {self.amount} on {self.title}'