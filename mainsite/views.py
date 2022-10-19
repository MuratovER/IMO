from urllib import request
from loguru import logger
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import logout, login, authenticate
from django.shortcuts import get_object_or_404, render, redirect
from .forms import CreateUserForm, ProfileForm, FaqForm
from mainsite.models import Profile, Post, Faq, Speciality, Triadkey
from django.contrib import messages
from django.core.mail import send_mail, BadHeaderError
from django.contrib.auth.decorators import login_required


def home_page(request):
    last_4 = Post.objects.order_by()[:4]
    context = {
        'last_4': last_4 
    }
    
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/phone_content.html',  context)
    else:
        return render(request, 'mainsite/home/home_page.html', context)


def login_view(request):
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
        if request.user.is_authenticated:
            return redirect('home_page')
        else:
            if request.method == 'POST':
                username = request.POST.get('username')
                password = request.POST.get('password')

                user = authenticate(
                    request, username=username, password=password)
                if user is not None:
                    login(request, user)
                    return redirect('home_page')
                else:
                    messages.info(request, 'Username OR password is incorrect')

            ctx = {}
        return render(request, 'mainsite/registration/LoginIndex.html', ctx)


def profile_view(request):

    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
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
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
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
            messages.info(request, 'invalid registration details')
            form = CreateUserForm()
        return render(request, 'mainsite/registration/RegesterIndex.html', {'form': form})


def logout_view(request):
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
        return render(request, 'mainsite/home/home_page.html')


def extra_view(request):

    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
        try:
            profile = request.user.profile
        except Profile.DoesNotExist:
            profile = Profile(user=request.user)
        if request.method == 'POST':
            form = ProfileForm(request.POST, instance=profile)

            if form.is_valid():
                extra = form.save()
                return redirect('profile')
        else:
            form = ProfileForm(instance=profile)
        ctx = {'form': form}
        return render(request, 'mainsite/registration/ExtraInfo.html', ctx)


def privacypolicy_view(request):
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
        return render(request, 'mainsite/privacyPolicy/PrivacyPolicy.html')


def enteringimo_view(request):
        last_4 = Post.objects.order_by()[:4]
        context = {
            'last_4': last_4
        }
        if request.user_agent.is_mobile:
            return render(request, 'mainsite/PhonePage/phone_enteringimo.html', context)
        else:
            return render(request, 'mainsite/enteringIMO/EnteringIMO.html', context)


def error_404_view(request, exception):

    return render(request, 'mainsite/404.html')


def faq_view(request):
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/phone_faq.html', )
    else:
        questions = Faq.objects.all()
        context = {'questions': questions}
        return render(request, 'mainsite/faq/faq.html', context)


@login_required
def profile_edit(request):
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
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
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
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
def password_change_done(request):
    logout(request)
    return redirect('login_view')


def aboutkazan_view(request):
    if not request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
        # question = get_object_or_404(Faq, pk=pk)
        question = Faq.objects.order_by()[:5]
        context = {
            # 'question': question,
            'question': question,
        }
        return render(request, 'mainsite/home/aboutKazan.html', context)


def news_list_view(request):
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
        news = Post.objects.all()

        context = {
            'news': news
        }
        return render(request, 'mainsite/news/news_list.html', context)


def news_view(request, pk):
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
        post = get_object_or_404(Post, pk=pk)
        last_4 = Post.objects.order_by()[:4]
        context = {
            'post': post,
            'last_4': last_4,
        }
        return render(request, 'mainsite/news/news.html', context)


def speciality_view(request, key):
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
        speciality = get_object_or_404(Speciality, key=key)
        last_n = Triadkey.objects.order_by()[:4]
        context = {
            'speciality': speciality,
            'last_n': last_n,
        }
        return render(request, 'mainsite/incomingIMO/incomingIMO.html', context)


def triadkey_view(request):
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
        triadkey = Triadkey.objects.all()

        return render(request, 'mainsite/incomingIMO/triadkey.html', {'triadkey': triadkey})