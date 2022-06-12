# Generated by Django 4.0.3 on 2022-06-12 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainsite', '0002_faculty_faq_post_cover_image_speciality_day_tipe_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='speciality',
            name='day_tipe',
            field=models.CharField(blank=True, choices=[('Очная', 'Очная'), ('Очно-вечерняя', 'Очно-вечерняя')], max_length=13, null=True),
        ),
        migrations.AlterField(
            model_name='speciality',
            name='type_edu',
            field=models.CharField(blank=True, choices=[('Бакалавриат', 'Бакалавриат'), ('Магистратура', 'Магистратура'), ('Асперантура', 'Асперантура')], max_length=12, null=True),
        ),
    ]
