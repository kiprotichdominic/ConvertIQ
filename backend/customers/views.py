from rest_framework import generics
from authentication.models import User

from decorator import user_has_permission
from rest_framework import generics, status
from .models import Lead, Customer
from rest_framework.response import Response
from .serializers import LeadSerializer, CustomerSerializer
from django.utils.decorators import method_decorator
# from ./decorators import user_has_permission
from rest_framework.permissions import AllowAny, IsAuthenticated


class LeadCreateView(generics.CreateAPIView):
    serializer_class = LeadSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

    def get_success_headers(self, data):
        try:
            return {'Location': str(data['id'])}
        except (TypeError, KeyError):
            return {}


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
