from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse,  HttpResponseRedirect
from django.forms import inlineformset_factory
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

# Create your views here.
from .models import Profile
from .forms import CreateUserForm, ProfileForm
from mainsite.models import Profile, Post

from django.views.generic import FormView
from django.urls import reverse

# create profile
from django.urls import reverse_lazy
from django.views.generic import View
from django.views.generic.edit import CreateView, UpdateView
from django.contrib.auth import login
from django.db.models import Count, Q
from datetime import datetime


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

                return redirect('login')

        ctx = {'form': form}
        return render(request, 'mainsite/registration/RegesterIndex.html', ctx)


# login view
def login_page(request):
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


# logout view
def logout_user(request):
    logout(request)
    return redirect('home_page')


# Profile view
class CreateProfilePageView(CreateView):
    model = Profile
    template_name = 'mainsite/registration/ExtraInfo.html'
    fields = ['user', 'profile_pic', 'name',
              'email', 'city', 'country', 'phone']

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)

    success_url = reverse_lazy('home_page')


class EditProfilePageView(UpdateView):
    model = Profile
    template_name = 'mainsite/profile/edit_profile_page.html'
    form_class = ProfileForm

    success_url = reverse_lazy('home_page')
