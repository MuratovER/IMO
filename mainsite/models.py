from email.policy import default
from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from phonenumber_field.modelfields import PhoneNumberField



class Post(models.Model):
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    short_description = models.CharField(max_length=200, blank=True, null=True)
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    cover_image = models.ImageField(upload_to='img', null=True, blank=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title


# model for Profile
class Profile(models.Model):
    '''Таблица профиля в которой отображается базовая информация о пользователе'''
    gender_choice = (

        ('M', 'Мужчина'),
        ('F', 'Женщина'),
        ('N', 'Не хочу говорить'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    gender = models.CharField(
        max_length=12, choices=gender_choice, blank=True, null=True)
    birthdate = models.DateTimeField(blank=True, null=True)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    citizenship = models.CharField(max_length=100, blank=True, null=True)

    email = models.EmailField(max_length=150)
    phone = PhoneNumberField(blank=True)

    def __str__(self):
        return self.name


class Triadkey(models.Model):
    title = models.CharField(max_length=100)
    short_description = models.CharField(max_length=200, blank=True, null=True)
    created_date = models.DateTimeField(default=timezone.now)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title


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
        ('Бакалавриат', 'Бакалавриат'),
        ('Магистратура', 'Магистратура'),
        ('Асперантура', 'Асперантура')
    )

    type_of_day_time = (
        ('Очная', 'Очная'),
        ('Очно-вечерняя', 'Очно-вечерняя')
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

    type_of_direction = (
        ('First-building', '1-е здание'),
        ('Second-building', '2-е здание'),
        ('Third-building', '3-е здание'),
        ('Fifth-building', '5-е здание'),
        ('Seveth-building', '7-е здание'),
        ('Eighth-building', '8-е здание')
    )

    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name="faculty", default=0)
    time_edu = models.IntegerField(default='0')
    type_edu = models.CharField(max_length=12, choices=type_of_edu, null=True, blank=True)
    day_tipe = models.CharField(max_length=13, choices=type_of_day_time, null=True, blank=True)
    price = models.IntegerField(null=True, blank=True)

    title = models.CharField(max_length=100)
    exam_one = models.CharField(max_length=14, choices=types_of_exams, null=True, blank=True)
    exam_two = models.CharField(max_length=14, choices=types_of_exams, null=True, blank=True)
    exam_three = models.CharField(max_length=14, choices=types_of_exams, null=True, blank=True)
    direction_choice = models.CharField(max_length=16, choices=type_of_direction, null=True, blank=True)

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
