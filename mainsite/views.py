from django.shortcuts import render, redirect 
from django.http import HttpResponse
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here.
from .models import *
from .forms import  CreateUserForm
from mainsite.models import Profile, Post


def home_page(request):
    return render(request, 'mainsite/home/home_page.html')

# signup view
def signup_page(request):
	if request.user.is_authenticated:
		return redirect('home_page')
	else:
		form = CreateUserForm()
		if request.method == 'POST':
			form = CreateUserForm(request.POST)
			if form.is_valid():
				form.save()
				user = form.cleaned_data.get('username')
				messages.success(request, 'Account was created for ' + user)

				return redirect('extra_page')
			
		context = {'form':form}
		return render(request, 'mainsite/registration/RegesterIndex.html', context)


# login view
def login_page(request):
	if request.user.is_authenticated:
		return redirect('home_page')
	else:
		if request.method == 'POST':
			username = request.POST.get('username')
			password =request.POST.get('password')

			user = authenticate(request, username=username, password=password)
			if user is not None:
				login(request, user)
				return redirect('home_page')
			else:
				messages.info(request, 'Username OR password is incorrect')

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


		context = {}
		return render(request, 'mainsite/registration/LoginIndex.html', context)


# logout view
def logout_user(request):
	logout(request)
	return redirect('home_page')    

def extra_page(request):
	return render(request, 'mainsite/registration/ExtraInfo.html')
