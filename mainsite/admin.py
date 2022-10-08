from django.contrib import admin
from django import forms
from mainsite.models import Profile, Post, Faculty, Speciality, Faq, Triadkey
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
admin.site.register(Faculty)
admin.site.register(Speciality)
admin.site.register(Faq)
admin.site.register(Triadkey)