from loguru import logger
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.shortcuts import render, redirect
from mainsite.forms import CreateUserForm, ProfileForm
from mainsite.models import Profile

def check_for_context(func, method, redirect_page,*args, **kwargs):
    """Check if blank if it is return empty dictionary instead"""
    if func is not None:
        if type(func(*args, **kwargs)) is not dict:
            logger.info("Return {}")
            return {}
        else:
            return func(*args, **kwargs)
    else:
        return method, {}, redirect_page


def user_authentication(request):
    """Authenticate user and redirect him to home page after it"""
    username = request.POST.get('username')
    password = request.POST.get('password')

    user = authenticate(request, username=username, password=password)
    if user is not None:
        logger.info(f'User {username} is authinticated')
        login(request, user)
        return redirect('home_page')
    else:
        message = 'Username OR password is incorrect'
        messages.info(request, message)
        logger.info(message)
        return {}


def user_login(request):
    """Authorize user if he passes authentication"""
    if request.user.is_authenticated:
        return redirect, 'mainsite:home_page', {}
    else:
        if request.method == 'POST':
            user_authentication(request)
        return render, '', {}


def add_user_to_db(request, form):
    user = form.save()
    user.refresh_from_db()
    user.save()
    username = form.cleaned_data.get('username')
    password = form.cleaned_data.get('password1')
    user = authenticate(username=username, password=password)
    messages.success(request, 'Account was created for ' + username)
    login(request, user)
    logger.info('Page redirect')
    return redirect, 'mainsite:extra'


def user_creation(request):
    """Adding user and login him if form is valid"""
    form = CreateUserForm
    method = render
    new_form = form(request.POST)
    redirect_url = ''
    if new_form.is_valid():
        method, redirect_url = add_user_to_db(request, new_form)
    else:
        new_form = form()

    return method, redirect_url, {'form': new_form}


def render_none_func(request, main_logic, context):
    redirect_url = ''
    if main_logic is None:
        method, new_context = render, context
    else:
        logger.error(main_logic)
        method, redirect_url, new_context = main_logic(request)
    
    return method, redirect_url, new_context


def logout_render(request):
    logout(request)
    method , redirect_url, context = redirect, 'mainsite:home_page', {} 
    return method, redirect_url, context



def method_router(request, main_logic, url, context):

    method, redirect_url, new_context = render_none_func(request, main_logic, context)
    if method is render:
        return render(request, url, new_context)
    elif method is redirect:
        return redirect(redirect_url)


def device_router(request,
                 mobile_url: str, pc_url: str, main_logic=None, context={}):
    """
        Check if given request is from mobile
        after checking return render with correct page
    """ 

    if request.user_agent.is_mobile:
        logger.info('User rendered as mobile')
        url = mobile_url
    else:
        logger.info('User rendered as pc')
        url = pc_url

    return method_router(request, main_logic, url, context)


def extra_signup_page(request):
    redirect_url= '' 
    context = {}

    try:
        profile = request.user.profile
    except Profile.DoesNotExist:
        profile = Profile(user=request.user)

    if request.method == 'POST':
        form = ProfileForm(request.POST, instance=profile)

        if form.is_valid():
            form.save()
            redirect_url= 'mainsite:profile'
            logger.info(redirect_url, context)
            return redirect, redirect_url, context

    else:
        form = ProfileForm(instance=profile)
    
    context = {'form': form}

    logger.info(redirect_url, context)
    return render, redirect_url, context 