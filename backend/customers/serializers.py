from rest_framework import serializers

from authentication.serializers import UserLoginSerializer
from .models import Lead, Customer


class LeadSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.username')

    # created_by=UserLoginSerializer()
    class Meta:
        model = Lead
        fields = ('first_name','middle_name','last_name','phone_number','location','gender','created_at','created_by')
        

class CustomerSerializer(serializers.ModelSerializer):
    lead = LeadSerializer()
    Created_by = serializers.ReadOnlyField(source='created_by.username')

    # created_by=UserLoginSerializer()
    class Meta:
        model = Customer

        fields = ('lead','annual_earning','date','products_of_interest','created_by')
    
    def create(self, validated_data):
        lead_data = validated_data.pop('lead')
        instance = Customer.objects.create(**validated_data)
            
        for lead in lead_data:
            Lead.objects.create(customer=instance, **lead_data)

        return instance

