from unicodedata import name
from django.urls import path
from django.contrib.auth import views as auth_views

from . import views


urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('privacypolicy/', views.privacypolicy_view, name='privacypolicy'),
    path('enteringimo/', views.enteringimo_view, name='enteringimo'),    
    path('profile/', views.profile_view, name='profile'),
    path('profile_edit/', views.profile_edit, name='profile_edit'),
    path('password_change/',
         auth_views.PasswordChangeView.as_view(template_name='mainsite/profile/password_change.html'),
         name = 'password_change'),
    path('password_change/done/', views.password_change_done, name='password_change_done'),
    path('news_list/', views.news_list_view, name='news_list'),
    path('news/post/<int:pk>', views.news_view, name='post'),
    path('extra/', views.extra_view, name='extra'),
    path('faq/', views.faq_view, name='faq'),
    path('speciality/<int:key>', views.speciality_view, name='speciality'),
]


handler404 = 'mainsite.views.error_404_view'

