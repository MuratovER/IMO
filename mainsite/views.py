from urllib import request
from django.views import View
from mainsite.forms import SignUpFormDelegate, SignUpFormStudent, SignUpForAgency
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout, login, authenticate
from django.shortcuts import render, redirect


def home_page(request):
    return render(request, 'mainsite/home/home_page.html')


# login view
def login_view(request):
    return render(request, 'mainsite/registration/LoginIndex.html')


# signup view
def signup_view(request):
    '''вьюха с логикой регистрации'''
    form = SignUpFormDelegate(request.POST)
    if form.is_valid():
        user = form.save()
        user.refresh_from_db()
        user.profile.email = form.cleaned_data.get('email')
        user.save()
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=password)
        login(request, user)
        return redirect('user_page')
    else:
        form = SignUpFormDelegate()
    return render(request, 'mainsite/registration/RegesterIndex.html', {'form': form})


# logout view
def logout_view(request):
    return render(request, 'mainsite/home/home_page.html')