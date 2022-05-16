# from cProfile import label
# from tkinter import Widget
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import ModelForm
from .models import Profile
from datetime import date

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
                  

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = [ 'name', 'email', 'city', 'country', 'gender', 'birthdate', 'phone', 'citizenship']
        widgets = {
            'name': forms.TextInput(attrs={ 'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-howCanICallYou",
                                            'id': "id_name",
                                            'placeholder': "Как к Вам обращаться?",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),
            'email': forms.EmailInput(attrs={ 'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-email",
                                            'id': "id_email",
                                            'placeholder': "Ваша электронная почта",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),            
            'city': forms.TextInput(attrs={ 'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-yourLifeSity",
                                            'id': "id_city",
                                            'placeholder': "Ваш родной город",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),
            'country': forms.TextInput(attrs={ 'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr",
                                            'id': "id_country",
                                            'placeholder': "Выберите Вашу страну",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),
            'phone': forms.NumberInput(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr",
                                            'id': "id_phone",
                                            'placeholder': "Ваш номер телефона",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),
            'gender': forms.Select(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr",
                                            'id': "id_gender",
                                            'placeholder': "Ваш пол",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),
            'birthdate': forms.DateInput(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr",
                                            'id': "id_birthdate",
                                            'placeholder': "Ваш день рождения 2000-05-15",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",}),
            'citizenship': forms.TextInput(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr",
                                            'id': "id_citizenship",
                                            'placeholder': "Вашe гражданство",
                                            'onmousedown': "mouseUp(this)" ,
                                            'onmouseup': "mouseUp(this)" ,
                                            'onchange': "mouseUp(this)" ,
                                            'onmouseover': "mouseUp(this)",
                                            'style': "border-color: green;",})                                                                                                                             
        }    