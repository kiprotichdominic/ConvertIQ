from rest_framework import generics
from authentication.models import User

from decorator import user_has_permission
from .models import Lead, Customer
from .serializers import LeadSerializer, CustomerSerializer
from django.utils.decorators import method_decorator
# from ./decorators import user_has_permission
from rest_framework.permissions import AllowAny, IsAuthenticated


class LeadCreateView(generics.CreateAPIView):
    serializer_class = LeadSerializer
    permission_classes = (AllowAny,)


class LeadListView(generics.ListAPIView):
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()
    permission_classes = (AllowAny, )


# @method_decorator(user_has_permission(User.ADMIN), name='dispatch')
class CustomerCreateView(generics.CreateAPIView):
    serializer_class = CustomerSerializer
    permission_classes = (AllowAny, )

class CustomerListView(generics.ListAPIView):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()



