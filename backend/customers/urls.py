from django.urls import path
# from .views import PostList, PostDetail, UserCreateView, UserLoginView, UserProfileView # new


from customers.views import CustomerCreateView, CustomerListView, LeadCreateView, LeadListView

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('leads/create/', LeadCreateView.as_view(), ),
    path('leads/list/', LeadListView.as_view(), ),
    path('customers/create/', CustomerCreateView.as_view(),),
    path('customers/list/', CustomerListView.as_view(), ),
    # path('register/', UserCreateView.as_view(), name='register'),
    # path('login/', UserLoginView.as_view(), name='login'),
    # path('profile/', UserProfileView.as_view(), name='profile'),
]