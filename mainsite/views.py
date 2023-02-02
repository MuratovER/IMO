from loguru import logger
from django.contrib.auth import logout
from django.shortcuts import get_object_or_404, render, redirect
from .forms import ProfileForm
from mainsite.models import Profile, Post, Faq, Speciality, Triadkey
from django.contrib.auth.decorators import login_required
from mainsite.business_logic.business_auth import device_router
from mainsite.business_logic.business_auth import user_login
from mainsite.business_logic.business_auth import user_creation
from mainsite.business_logic.business_auth import logout_render
from mainsite.business_logic.business_auth import extra_signup_page
from mainsite.business_logic.business_profile import profile_render
from mainsite.business_logic.business_profile import profile_edit_render


def home_page(request):
    last_4_news = Post.objects.order_by()[:4]

    return device_router(request,
                        mobile_url='mainsite/PhonePage/phone_content.html',
                        pc_url='mainsite/home/home_page.html',
                        context={'last_4': last_4_news})


def login_view(request):
    return device_router(request,
                        mobile_url='mainsite/PhonePage/index.html',
                        pc_url='mainsite/registration/LoginIndex.html',
                        main_logic=user_login)


def logout_view(request):
    return device_router(request,
                        mobile_url='mainsite/PhonePage/index.html',
                        pc_url='mainsite/home/home_page.html',
                        main_logic=logout_render)


def signup_view(request):
    return device_router(request,
                        mobile_url='mainsite/PhonePage/index.html',
                        pc_url='mainsite/registration/RegesterIndex.html',
                        main_logic=user_creation)


def profile_view(request):
    return device_router(request,
                        mobile_url='mainsite/PhonePage/index.html',
                        pc_url='mainsite/profile/profile.html',
                        main_logic=profile_render)


def extra_view(request):

    return device_router(request,
                        mobile_url='mainsite/PhonePage/index.html',
                        pc_url='mainsite/registration/ExtraInfo.html',
                        main_logic=extra_signup_page
    )



def privacypolicy_view(request):
    return device_router(request,
                        mobile_url='mainsite/PhonePage/index.html',
                        pc_url='mainsite/PhonePage/index.html'
    )


def enteringimo_view(request):
    last_4 = Post.objects.order_by()[:4]
    return device_router(request,
                        mobile_url='mainsite/PhonePage/index.html',
                        pc_url='mainsite/PhonePage/index.html',
                        context = {'last_4': last_4})


def error_404_view(request, exception):
    return render(request, 'mainsite/404.html')


def faq_view(request):
    questions = Faq.objects.all()
    return device_router(request,
                        mobile_url='mainsite/PhonePage/phone_faq.html',
                        pc_url='mainsite/faq/faq.html',
                        context = {"questions":questions})

@login_required
def profile_edit(request):
    return device_router(request,
                        mobile_url='mainsite/PhonePage/index.html',
                        pc_url='mainsite/profile/proflie_edit.html', 
                        main_logic=profile_edit_render)



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

        return render(request,
                      'mainsite/profile/proflie_edit.html', {'form': form})


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
        return render(request,
                      'mainsite/incomingIMO/incomingIMO.html', context)


def triadkey_view(request):
    if request.user_agent.is_mobile:
        return render(request, 'mainsite/PhonePage/index.html', )
    else:
        triadkey = Triadkey.objects.all()
        return render(request,
                      'mainsite/incomingIMO/triadkey.html',
                      {'triadkey': triadkey})
