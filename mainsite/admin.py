from django.contrib import admin
from django import forms
from mainsite.models import Profile, Post
from ckeditor_uploader.widgets import CKEditorUploadingWidget





class PostAdminForm(forms.ModelForm):
    text = forms.CharField(label="Текст поста", widget=CKEditorUploadingWidget())

    class Meta:
        model = Post
        fields = '__all__'


class PostAdmin(admin.ModelAdmin):
    form = PostAdminForm


admin.site.register(Post, PostAdmin)
admin.site.register(Profile)
