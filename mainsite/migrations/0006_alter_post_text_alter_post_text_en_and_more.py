# Generated by Django 4.0.3 on 2022-11-28 23:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainsite', '0005_alter_post_text_alter_post_text_en_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='text',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='post',
            name='text_en',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='text_ru',
            field=models.TextField(null=True),
        ),
    ]
