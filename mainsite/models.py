from django.utils import timezone

from django.db import models
from django.contrib.auth.models import User
from django.conf import settings


class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    short_description = models.CharField(max_length=200, blank=True, null=True)
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

    gender_choice = (

        ('M', 'Male'),
        ('F', 'Female'),
        ('N', 'None of this'),
    )
    country_choice = {
        ('US', 'United States'),
        ('FR', 'France'),
        ('CN', 'China'),
        ('RU', 'Russia'),
        ('IT', 'Italy'),
    }
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=12, choices=gender_choice, blank=True, null=True)
    birthdate = models.DateField(blank=True, null=True)
    country = models.CharField(max_length=100, choices=country_choice, blank=True, null=True)
    city = models.CharField(max_length=100)
    citizenship = models.CharField(max_length=100,blank=True, null=True)

    email = models.EmailField(max_length=150)
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Speciality(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    key = models.CharField(max_length=10)
    price = models.IntegerField(null=True, blank=True)
    score = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return 'Код специальности: {}| Название: {}'.format(self.key, self.title)
