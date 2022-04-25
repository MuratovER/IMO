from dataclasses import field
from tkinter import Widget
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import User
from django import forms
from .models import Profile
from django.contrib.auth.models import User
from mainsite.models import Profile

class CreateUserForm(UserCreationForm):
    password1 = forms.CharField(label='пароль', widget=forms.PasswordInput(attrs={'class': "main_block_form_textPassword main_block_form_input_1 InputFieldPassword",
                                                                                  'id': "id_password1",
                                                                                  'placeholder': "Придумайте пароль",
                                                                                  'onmousedown': "mouseUp(this)",
                                                                                  'onmouseup': "mouseUp(this)",
                                                                                  'onchange': "mouseUp(this)",
                                                                                  'onmouseover': "mouseUp(this)"}))
    password2 = None

    class Meta:
        model = User
        fields = ['username', 'password1']
        widgets = {
            'username':  forms.TextInput(attrs={'class': "main_block_form_textName main_block_form_input_1 InputFieldName",
                                                'id': "InputFieldName",
                                                'placeholder': "Придумайте имя пользователя",
                                                'onmousedown': "mouseUp(this)",
                                                'onmouseup': "mouseUp(this)",
                                                'onchange': "mouseUp(this)",
                                                'onmouseover': "mouseUp(this)"}),
            'password1': forms.PasswordInput()
        }

class EditProfileForm(UserChangeForm):
    email = forms.EmailField(widget=forms.EmailInput)
    first_name = forms.CharField(max_length=40)
    last_name = forms.CharField(max_length=40)

    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name',  'email']


class ProfileForm(ModelForm):

    class Meta:
        model = Profile
        fields = ['user', 'profile_pic', 'name', 'email', 'city', 'country', 'phone']
        widgets = {
            'name': forms.TextInput(attrs={ 'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-howCanICallYou",
                                            'placeholder': "Как к Вам обращаться?",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),
            'email': forms.EmailInput(attrs={ 'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-email",
                                            'placeholder': "Ваша электронная почта",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),            
            'city': forms.TextInput(attrs={ 'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-yourLifeSity",
                                            'placeholder': "Ваш родной город",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),
            'country': forms.TextInput(attrs={ 'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr",
                                            'placeholder': "Выберите Вашу страну",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),
            'phone': forms.NumberInput(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr",
                                            'placeholder': "Ваш номер телефона",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",})                           
        }