# Generated by Django 4.0.3 on 2022-06-13 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainsite', '0002_faculty_faq_post_cover_image_speciality_day_tipe_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='speciality',
            name='exam',
            field=models.CharField(blank=True, choices=[('MATH', 'Математика'), ('RUSS', 'Русский Язык'), ('CHEM', 'Химия'), ('PHYS', 'Физика'), ('SOCL', 'Обществознание'), ('INFO', 'Информатика'), ('FRLN', 'Иностранный язык')], max_length=14, null=True),
        ),
    ]