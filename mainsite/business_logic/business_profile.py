from mainsite.models import Profile
from mainsite.forms import ProfileForm
from django.shortcuts import redirect
from django.shortcuts import render, redirect

def form_update(form, redirect_page):
    """Updating form if form is valide"""
    if form.is_valid():
        new_form = form.save(commit=False)
        new_form.save()
        return redirect(redirect_page)


def post_method_check(request, profile, check_form):
    """Check function method ande return form with params"""
    if request.method == "POST":
        form = check_form(request.POST, instance=profile)
        form_update(form, 'profile')
        return form
    else:
        form = check_form(instance=profile)
        return form


def profile_render(request):
    """Function for profile rendering with updated form"""
    redirect_url = ''
    profile = Profile.objects.get(user=request.user)
    form = post_method_check(request, profile, ProfileForm)
    context = {
        'profile': profile,
        'form': form,
    }
    return render, redirect_url, context