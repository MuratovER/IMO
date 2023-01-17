from loguru import logger
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.shortcuts import render, redirect


def check_blank_function(func, *args, **kwargs):
    """Check if blank if it is return empty dictionary instead"""

    if func is None:
        return {}
    else:
        return func(*args, **kwargs)


def mobile_check(request,
                 mobile_url: str, pc_url: str, main_logic=None, context={}):
    """
        Check if given request is from mobile
        after checking return render with correct page
    """

    if request.user_agent.is_mobile:
        logger.info('User rendered as mobile')
        return render(request, mobile_url, context)
    else:
        logger.info('User rendered as pc')

        context = check_blank_function(main_logic, request)
        return render(request, pc_url, context)


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
        return redirect('home_page')
    else:
        if request.method == 'POST':
            user_authentication(request)
        return {}
