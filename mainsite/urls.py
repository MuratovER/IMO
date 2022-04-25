from unicodedata import name
from django.urls import path
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.contrib.auth.views import LogoutView
from . import views
from .views import *

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('signup/', views.signup_page, name="signup_page"),
	path('login/', views.login_page, name="login"),  
	path('logout/', views.logout_user, name="logout_user"),
    path('profile/', views.profile_view, name='profile'),
    path('news/', views.news_view, name='news'),
    path('edit_profile_page/<int:pk>/',EditProfilePageView.as_view(), name='edit_user_profile'),
    path('create_profile_page/',CreateProfilePageView.as_view(), name='create_user_profile'),  
]