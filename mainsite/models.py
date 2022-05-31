from django.utils import timezone
from multiselectfield import MultiSelectField

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

        ('Male', 'M'),
        ('Female', 'F'),
        ('None of this', 'N'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=12, choices=gender_choice, blank=True, null=True)
    birthdate = models.DateTimeField(blank=True, null=True)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    citizenship = models.CharField(max_length=100,blank=True, null=True)

    email = models.EmailField(max_length=150)
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Faculty(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    fac_id = models.CharField(max_length=10)
    docs = models.FileField(upload_to='docs', null=True, blank=True)
    photo = models.ImageField(upload_to='img', null=True, blank=True)

    def __str__(self):
        return self.name


class Speciality(models.Model):

    type_of_edu = (
        ('B', 'Бакалавриат'),
        ('M', 'Магистратура'),
        ('A', 'Асперантура'),
    )

    type_of_day_time = (
        ('D', 'Очная'),
        ('N', 'Очно-вечерняя')
    )

    types_of_exams = (
        ('MATH', 'Математика'),
        ('RUSS', 'Русский Язык'),
        ('CHEM', 'Химия'),
        ('PHYS', 'Физика'),
        ('SOCL', 'Обществознание'),
        ('INFO', 'Информатика'),
        ('FRLN', 'Иностранный язык')
    )

    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name="faculty", default=0)
    time_edu = models.IntegerField(default='0')
    type_edu = models.CharField(max_length=12, choices=type_of_edu, null=True, blank=True)
    day_tipe = models.CharField(max_length=3, choices=type_of_day_time,null=True, blank=True )
    price = models.IntegerField(null=True, blank=True)

    title = models.CharField(max_length=100)
    exam = MultiSelectField(max_length=14, choices=types_of_exams, null=True, blank=True)
    description = models.TextField()
    key = models.CharField(max_length=10)
    score = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return 'Код специальности: {}| Название: {}'.format(self.key, self.title)


class Faq(models.Model):
    title = models.CharField(max_length=100)
    question = models.TextField()

    def __str__(self):
        return self.title
