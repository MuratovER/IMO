from mainsite.models import Profile
from mainsite.forms import ProfileForm
from django.shortcuts import redirect
from django.shortcuts import render, redirect
from mainsite.business_logic.business_auth import post_render


def form_update(form, redirect_page):
    """Updating form if form is valide"""
    if form.is_valid():
        new_form = form.save(commit=False)
        new_form.save()
        return redirect(redirect_page)


def profile_render(request):
    """Function for profile rendering with updated form"""
    redirect_url = ''
    profile = Profile.objects.get(user=request.user)
    method, form = post_render(request, ProfileForm, instance=profile)
    context = {
        'profile': profile,
        'form': form,
    }
    return method, redirect_url, context


def profile_edit_render(request):
    "Function that render profile edit form"
    profile = Profile.objects.get(user=request.user)
    redirect_url = 'mainsite:profile'
    method, form = post_render(request, ProfileForm, instance=profile)
    context = {
        'profile': profile,
        'form': form,
    }
    return method, redirect_url, context