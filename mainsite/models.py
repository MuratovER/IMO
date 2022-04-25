from django.utils import timezone
from django.db import models
from django.db.models import Model
from django.contrib.auth.models import User
from django.conf import settings
from django.forms.fields import ImageField



class Post(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
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


# model for Profile
class Profile(models.Model):
    user = models.ForeignKey(User,  on_delete=models.CASCADE)
    name = models.CharField(max_length=25,  null=True, blank=True)
    email = models.EmailField(max_length=150,  null=True, blank=True)
    city = models.CharField(max_length=25,  null=True, blank=True)
    country = models.CharField(max_length=25,  null=True, blank=True)
    phone = models.CharField(max_length=25,  null=True, blank=True)
    profile_pic = models.ImageField(
        null=True, blank=True, upload_to="images/profile/")

    def __str__(self):
        return str(self.user)


class Speciality(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    key = models.CharField(max_length=10)
    price = models.IntegerField(null=True, blank=True)
    score = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return 'Код специальности: {}| Название: {}'.format(self.key, self.title)

