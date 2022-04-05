from urllib import request
from mainsite.forms import SignUpFormDelegate, SignUpFormStudent, SignUpForAgency
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout, login, authenticate
from django.shortcuts import render, redirect

from mainsite.models import Profile, Post


def home_page(request):
    return render(request, 'mainsite/home/home_page.html')


def login_view(request):
    return render(request, 'mainsite/registration/LoginIndex.html')


def profile_view(request):
    profile = Profile.objects.get(user=request.user)

    ctx = {
        'profile': profile
    }
    return render(request, 'mainsite/profile/profile.html', ctx)


def news_view(request):
    posts = Post.objects.all()

    ctx = {
        'posts': posts
    }
    return render(request, 'mainsite/home/news.html', ctx)


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


def logout_view(request):
    return render(request, 'mainsite/home/home_page.html')