from django.shortcuts import render, redirect 
from django.http import HttpResponse
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm

from django.contrib.auth import authenticate, login, logout

from django.contrib import messages

from django.contrib.auth.decorators import login_required

# Create your views here.
from .models import *
from .forms import  CreateUserForm

def home_page(request):
    return render(request, 'mainsite/home/home_page.html')

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

		context = {}
		return render(request, 'mainsite/registration/LoginIndex.html', context)

def logout_user(request):
	logout(request)
	return redirect('home_page')    

def extra_page(request):
	return render(request, 'mainsite/registration/ExtraInfo.html')


		