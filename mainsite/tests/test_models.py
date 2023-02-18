from django.test import TestCase
from mainsite.models import Profile, User, Triadkey, Faculty, Speciality, Faq, Post
from django.utils import timezone


class ModelsCreation(TestCase):

    def setUp(self):
        self.user1 = User.objects.create(
            username='Eldar'
        )

    def test_profile_creation(self):
        Profile.objects.create(
            user=self.user1,
            name='Name',
            country='Kazakhstan',
            city='Astana',
            email='user@mail.ru'
        )

        self.assertEquals(len(Profile.objects.all()), 1)

    def test_triadkey_creation(self):
        Triadkey.objects.create(
            title='Testtitle',
            short_description='Test description',
        )

        Triadkey.objects.create(
            title='Testtitle2',
            short_description='Test description2',
        )

    def test_faculty_creation(self):
        Faculty.objects.create(
            name='Name',
            fac_id='Fac_Id'
        )

        self.assertEquals(len(Faculty.objects.all()), 1)

    def test_speciality_creation(self):
        fac_1 = Faculty.objects.create(
            name='Name',
            fac_id='Fac_Id'
        )

        Speciality.objects.create(
            faculty=fac_1,
            type_edu='Бакалавриат',
            day_tipe='Очная',
            title='Testtitle',
            exam_one='Математика', 
            exam_two='Математика', 
            exam_three='Математика',
            direction_choice='1-е здание',
            description='Test description',
            key='1001',
        )
        self.assertEquals(len(Speciality.objects.all()), 1)

    def test_question_creation(self):
        Faq.objects.create(
            title='Testtitle',
            question='Test question'
        )
        self.assertEquals(len(Faq.objects.all()), 1)

    def test_post_creation(self):
        Post.objects.create(
            author=self.user1,
            title='Test titel',
            short_description='Test',
            text='Text',
        )
        Post.objects.get(title='Test titel').publish()
        time = timezone.now()
        date = Post.objects.get(title='Test titel').published_date
        self.assertEquals(time, date)
