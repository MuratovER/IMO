# Generated by Django 4.0.3 on 2023-02-23 13:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('mainsite', '0006_alter_post_text_alter_post_text_en_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Graduate',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('gra_id', models.CharField(max_length=10)),
                ('short_description', models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='speciality',
            name='graduate',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, related_name='graduate', to='mainsite.graduate'),
        ),
    ]