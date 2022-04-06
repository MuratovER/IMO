from unicodedata import name
from django.urls import path

from . import views


urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('PrivacyPolicy/', views.PrivacyPolicy_view, name='PrivacyPolicy'),
    path('EnteringIMO/', views.EnteringIMO_view, name='EnteringIMO'),    
]