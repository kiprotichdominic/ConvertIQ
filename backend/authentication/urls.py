from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import (
    AuthUserRegistrationView,
    AuthUserLoginView,
    UserListView,
    CustomTokenObtainPairView
)

urlpatterns = [
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/login', CustomTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('register', AuthUserRegistrationView.as_view(), name='register'),
    path('login', AuthUserLoginView.as_view(), name='login'),
    path('users', UserListView.as_view(), name='users')
]
