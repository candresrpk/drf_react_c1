from django.urls import path, include
from rest_framework import routers
from .views import TransactionsView

router = routers.DefaultRouter()
router.register(r'transactions', TransactionsView, 'transactions')

urlpatterns = [
    path('api/v1/', include(router.urls) )
]


