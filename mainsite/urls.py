from unicodedata import name
from django.urls import path

from . import views


urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('signup/', views.signup_page, name="signup_page"),
	  path('login/', views.login_page, name="login"),  
	  path('logout/', views.logout_user, name="logout_user"),
    path('extra/', views.extra_page, name="extra_page"),
    path('profile/', views.profile_view, name='profile'),
    path('news/', views.news_view, name='news'),

]