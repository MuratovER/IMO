# Generated by Django 4.0.3 on 2022-06-13 16:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainsite', '0003_alter_speciality_exam'),
    ]

    operations = [
        migrations.RenameField(
            model_name='speciality',
            old_name='exam',
            new_name='exam_one',
        ),
        migrations.AddField(
            model_name='speciality',
            name='exam_three',
            field=models.CharField(blank=True, choices=[('MATH', 'Математика'), ('RUSS', 'Русский Язык'), ('CHEM', 'Химия'), ('PHYS', 'Физика'), ('SOCL', 'Обществознание'), ('INFO', 'Информатика'), ('FRLN', 'Иностранный язык')], max_length=14, null=True),
        ),
        migrations.AddField(
            model_name='speciality',
            name='exam_two',
            field=models.CharField(blank=True, choices=[('MATH', 'Математика'), ('RUSS', 'Русский Язык'), ('CHEM', 'Химия'), ('PHYS', 'Физика'), ('SOCL', 'Обществознание'), ('INFO', 'Информатика'), ('FRLN', 'Иностранный язык')], max_length=14, null=True),
        ),
    ]
