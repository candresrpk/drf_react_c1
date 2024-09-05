from rest_framework.viewsets import ModelViewSet
from .serializers import TransactionSerializer
from .models import Transaction
# Create your views here.


class TransactionsView(ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()
