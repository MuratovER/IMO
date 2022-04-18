from django.utils import timezone

from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    short_description = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)


    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title


#model for Profile
class Profile(models.Model):
    '''Таблица профиля в которой отображается базовая информация о пользователе'''
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=150)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.name