from urllib import request

from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout, login, authenticate
from django.shortcuts import render, redirect
from .forms import CreateUserForm, ProfileForm
from mainsite.models import Profile, Post
from django.contrib import messages



def home_page(request):
    return render(request, 'mainsite/home/home_page.html')


def login_view(request):
    if request.user.is_authenticated:
        return redirect('home_page')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home_page')
            else:
                messages.info(request, 'Username OR password is incorrect')

        ctx = {}
    return render(request, 'mainsite/registration/LoginIndex.html', ctx)



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
    form = CreateUserForm(request.POST)
    if form.is_valid():
        user = form.save()
        user.refresh_from_db()
        # user.profile.email = form.cleaned_data.get('email')
        user.save()
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=password)
        messages.success(request, 'Account was created for ' + username)
        login(request, user)
        return redirect('extra')
    else:
        form = CreateUserForm()
    return render(request, 'mainsite/registration/RegesterIndex.html', {'form': form})


def logout_view(request):
    return render(request, 'mainsite/home/home_page.html')


def extra_view(request):
    try:
        profile = request.user.profile
    except Profile.DoesNotExist:
        profile = Profile(user=request.user)
    if request.method=='POST':
        form = ProfileForm(request.POST, instance=profile)
        
        if form.is_valid():
            extra = form.save()
            return redirect('profile')
    else:
        form = ProfileForm(instance=profile)        
    ctx = {'form': form}
    return render(request, 'mainsite/registration/ExtraInfo.html', ctx)
             


def error_404_view(request, exception):
    return render(request, 'mainsite/404.html')


def aboutkazan_view(request):
    return render(request, 'mainsite/home/aboutKazan.html')
