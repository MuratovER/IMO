from django.test import SimpleTestCase, Client 
from django.urls import reverse, resolve
from mainsite.views import * 
from django.contrib.auth import views as auth_views


class TestUrls(SimpleTestCase):   

    def test_home_is_resolver(self):
        url = reverse('mainsite:home_page')
        self.assertEquals(resolve(url).func, home_page)

    def test_signup_is_resolver(self):
        url = reverse('mainsite:signup')
        self.assertEquals(resolve(url).func, signup_view)

    def test_login_is_resolver(self):
        url = reverse('mainsite:login')
        self.assertEquals(resolve(url).func, login_view)

    def test_logout_is_resolver(self):
        url = reverse('mainsite:logout')
        self.assertEquals(resolve(url).func, logout_view)

    def test_privacy_is_resolver(self):
        url = reverse('mainsite:privacypolicy')
        self.assertEquals(resolve(url).func, privacypolicy_view)

    def test_entering_is_resolver(self):
        url = reverse('mainsite:enteringimo')
        self.assertEquals(resolve(url).func, enteringimo_view)

    def test_profile_is_resolver(self):
        url = reverse('mainsite:profile')
        self.assertEquals(resolve(url).func, profile_view)

    def test_profile_edit_is_resolver(self):
        url = reverse('mainsite:profile_edit')
        self.assertEquals(resolve(url).func, profile_edit)

    def test_password_change_is_resolver(self):
        url = reverse('mainsite:password_change')
        self.assertEquals(resolve(url).func.view_class, auth_views.PasswordChangeView)

    def test_change_done_is_resolver(self):
        url = reverse('mainsite:password_change_done')
        self.assertEquals(resolve(url).func, password_change_done)

    def test_news_list_is_resolver(self):
        url = reverse('mainsite:news_list')
        self.assertEquals(resolve(url).func, news_list_view) 

    def test_news_is_resolver(self):
        url = reverse('mainsite:post', args=[1])
        self.assertEquals(resolve(url).func, news_view)  

    def test_extra_is_resolver(self):
        url = reverse('mainsite:extra')
        self.assertEquals(resolve(url).func, extra_view)  

    def test_faq_is_resolver(self):
        url = reverse('mainsite:faq')
        self.assertEquals(resolve(url).func, faq_view)  

    def test_aboutKazan_is_resolver(self):
        url = reverse('mainsite:aboutkazan')
        self.assertEquals(resolve(url).func, aboutkazan_view)  

    def test_speciality_is_resolver(self):
        url = reverse('mainsite:speciality', args=[1])
        self.assertEquals(resolve(url).func, speciality_view) 

    def test_triadkey_is_resolver(self):
        url = reverse('mainsite:triadkey')
        self.assertEquals(resolve(url).func, triadkey_view)      