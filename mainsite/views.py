from mainsite.forms import SignUpForm
from django.shortcuts import render


def home_page(request):
    return render(request, 'mainsite/home/home_page.html')


#signup view
def signup_view(request):
    '''вьюха с логикой регистрации'''
    form = SignUpForm(request.POST)
    if form.is_valid():
        user = form.save()
        user.refresh_from_db()
        #user.profile.first_name = form.cleaned_data.get('first_name')
        #user.profile.last_name = form.cleaned_data.get('last_name')
        user.profile.email = form.cleaned_data.get('email')
        user.save()
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=password)
        login(request, user)
        return redirect('user_page')
    else:
        form = SignUpForm()
    return render(request, 'mainsite/registration/RegesterIndex.html', {'form': form})     