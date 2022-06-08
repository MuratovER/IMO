from urllib import request
from loguru import logger
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout, login, authenticate
from django.shortcuts import render, redirect,get_object_or_404
from .forms import CreateUserForm, ProfileForm, FaqForm
from mainsite.models import Profile, Post, Faq
from django.contrib import messages
from django.core.mail import send_mail, BadHeaderError
from django.contrib.auth.decorators import login_required


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
    if request.method == "POST":
        form = ProfileForm(request.POST, instance=profile)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.save()
            return redirect('profile')
    else:
        form = ProfileForm(instance=profile)

    context = {
        'profile': profile,
        'form': form,
    }
    return render(request, 'mainsite/profile/profile.html', context)


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
             
def privacypolicy_view(request):
    return render(request, 'mainsite/privacyPolicy/PrivacyPolicy.html')
    
def enteringimo_view(request):
    return render(request, 'mainsite/enteringIMO/EnteringIMO.html')

def error_404_view(request, exception):
    return render(request, 'mainsite/404.html')

def faq_view(request):
    questions = Faq.objects.all()
    context = {'questions': questions}
    return render(request, 'mainsite/faq/faq.html', context)


@login_required
def profile_edit(request):
    profile = Profile.objects.get(user=request.user)
    if request.method == "POST":
        form = ProfileForm(request.POST, instance=profile)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.save()
            return redirect('profile')
    else:
        form = ProfileForm(instance=profile)

    return render(request, 'mainsite/profile/proflie_edit.html', {'form': form})


@login_required
def password_edit(request):
    profile = Profile.objects.get(user=request.user)
    if request.method == "POST":
        form = ProfileForm(request.POST, instance=profile)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.save()
            return redirect('profile')
    else:
        form = ProfileForm(instance=profile)

    return render(request, 'mainsite/profile/proflie_edit.html', {'form': form})

# @login_required
# def password_edit(request):
#     profile = Profile.objects.get(user = request.user)
#     if request.method == "POST":
#         form = CreateUserForm(request.POST, instance=profile)
#         if form.is_valid():
#             profile = form.save(commit=False)
#             profile.save()
#             return redirect('profile')
#     else:
#         form = ProfileForm(instance=profile)

    # return render(request, 'mainsite/profile/password_change.html', {'form': form})

@login_required
def password_change_done(request):
    logout(request)
    return redirect('login_view')


def news_list_view(request):
    news = Post.objects.all()

    context = {
        'news': news
    }
    return render(request, 'mainsite/news/news_list.html', context)


def news_view(request, pk):
    post = get_object_or_404(Post, pk=pk)
    last_4 = Post.objects.order_by()[:4]
    context = {
        'post': post,
        'last_4': last_4,
    }
    return render(request, 'mainsite/news/news.html', context)
