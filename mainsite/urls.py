from unicodedata import name
from django.urls import path

from . import views


urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('privacypolicy/', views.privacypolicy_view, name='privacypolicy'),
    path('enteringimo/', views.enteringimo_view, name='enteringimo'),    
    path('profile/', views.profile_view, name='profile'),
    path('news/', views.news_view, name='news'),
    path('extra/', views.extra_view, name='extra'),
]

handler404 = 'mainsite.views.error_404_view'

