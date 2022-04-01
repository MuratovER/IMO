from django.urls import path

from . import views


urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('signup/', views.signup_view, name='signup'),
]