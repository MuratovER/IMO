# from cProfile import label
# from tkinter import Widget
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import ModelForm


# Я - Представитель
class SignUpFormDelegate(UserCreationForm):
    username = forms.CharField(label='Логин', widget=forms.TextInput(
        attrs={'class': 'main_block_form_textName main_block_form_input_1 InputFieldName',
               'id': "InputFieldName",
               'placeholder': "Придумайте имя пользователя",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    password = forms.CharField(label='пароль', widget=forms.PasswordInput(
        attrs={'class': "main_block_form_textPassword main_block_form_input_1 InputFieldPassword",
               'id': "InputFieldPassword",
               'placeholder': "Придумайте пароль",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    name = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-howCanICallStud",
               'id': "InputFieldMiddleValidationStud1",
               'placeholder': "Как зовут студента?",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    country = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectCountryStud",
               'id': "InputFieldCountryNameValidationStud1",
               'placeholder': "Страна студента",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    homecity = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-LifeSityStud",
               'id': "InputFieldYourNativeSityStud1",
               'placeholder': "Родной город студента",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    phone = forms.CharField(label='номер', widget=forms.NumberInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-NumberPhoneStud",
               'id': "InputFieldYourNumberPhoneStud1",
               'placeholder': "Номер телефона студента (при наличии)",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    email = forms.EmailField(max_length=150, widget=forms.EmailInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-emailStud",
               'id': "InputFieldEmailAddressStud1",
               'placeholder': "Адрес электронной почты студента (при наличии)",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    name_applicant = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-howCanICallYou",
               'id': "InputFieldMiddleValidationPer1",
               'placeholder': "Как к Вам обращаться?",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    name_delegate = forms.CharField(max_length=100, widget=forms.TextInput(attrs={
        'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  lengText-whoAreYouForApplicants",
        'id': "InputFieldCountryNameValidationPer1",
        'placeholder': "Кем Вы являетесь для абитуриента?",
        'onmousedown': "mouseUp(this)",
        'onmouseup': "mouseUp(this)",
        'onchange': "mouseUp(this)",
        'onmouseover': "mouseUp(this)"}))
    delegate_email = forms.EmailField(max_length=150, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-email",
               'id': "InputFieldYourNumberPhonePer1",
               'placeholder': "Ваша электронная почта",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    delegate_phone = forms.CharField(label='номер', widget=forms.NumberInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-yourNumberPhone",
               'id': "InputFieldEmailAddressPer1",
               'placeholder': "Ваш номер телефона",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'phone',
                  'name', 'country', 'homecity', 'name_applicant',
                  'name_delegate', 'delegate_email', 'delegate_phone')


# Я студент
class SignUpFormStudent(UserCreationForm):
    username = forms.CharField(label='Логин', widget=forms.TextInput(
        attrs={'class': 'main_block_form_textName main_block_form_input_1 InputFieldName',
               'id': "InputFieldName",
               'placeholder': "Придумайте имя пользователя",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    password = forms.CharField(label='пароль', widget=forms.PasswordInput(
        attrs={'class': "main_block_form_textPassword main_block_form_input_1 InputFieldPassword",
               'id': "InputFieldPassword",
               'placeholder': "Придумайте пароль",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    name = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-howCanICallYou",
               'id': "InputFieldMiddleValidation",
               'placeholder': "Как к Вам обращаться?",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    country = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountry",
               'id': "InputFieldCountryNameValidation",
               'placeholder': "Выберитн Вашу страну",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    homecity = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-yourLifeSity",
               'id': "InputFieldYourNativeSity",
               'placeholder': "Ваш родной город",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    phone = forms.CharField(label='номер', widget=forms.NumberInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-yourNumberPhone",
               'id': "InputFieldYourNumberPhone",
               'placeholder': "Ваш номер телефона",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    email = forms.EmailField(max_length=150, widget=forms.EmailInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-email",
               'id': "InputFieldEmailAddress",
               'placeholder': "Адрес электронной почты",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))

    class Meta:
        model = User
        fields = ('username', 'password', 'name', 'country', 'homecity', 'phone', 'email')


# Я рекрутинговое агенство
class SignUpForAgency(UserCreationForm):
    username = forms.CharField(label='Логин', widget=forms.TextInput(
        attrs={'class': 'main_block_form_textName main_block_form_input_1 InputFieldName',
               'id': "InputFieldName",
               'placeholder': "Придумайте имя пользователя",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    password = forms.CharField(label='пароль', widget=forms.PasswordInput(
        attrs={'class': "main_block_form_textPassword main_block_form_input_1 InputFieldPassword",
               'id': "InputFieldPassword",
               'placeholder': "Придумайте пароль",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    name = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-howCanICallStud",
               'id': "InputFieldMiddleValidationStud1",
               'placeholder': "Как зовут студента?",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    country = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectCountryStud",
               'id': "InputFieldCountryNameValidationStud1",
               'placeholder': "Страна студента",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    homecity = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-LifeSityStud",
               'id': "InputFieldYourNativeSityStud1",
               'placeholder': "Родной город студента",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    phone = forms.CharField(label='номер', widget=forms.NumberInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-NumberPhoneStud",
               'id': "InputFieldYourNumberPhoneStud1",
               'placeholder': "Номер телефона студента (при наличии)",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    email = forms.EmailField(max_length=150, widget=forms.EmailInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-emailStud",
               'id': "InputFieldEmailAddressStud1",
               'placeholder': "Адрес электронной почты студента (при наличии)",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    name_company = forms.CharField(max_length=100, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-howCanICallYou",
               'id': "InputFieldMiddleValidationPer1",
               'placeholder': "Как к Вам обращаться?",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    company_business = forms.CharField(max_length=100, widget=forms.TextInput(attrs={
        'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  lengText-whoAreYouForApplicants",
        'id': "InputFieldCountryNameValidationPer1",
        'placeholder': "Кем Вы являетесь для абитуриента?",
        'onmousedown': "mouseUp(this)",
        'onmouseup': "mouseUp(this)",
        'onchange': "mouseUp(this)",
        'onmouseover': "mouseUp(this)"}))
    name_applicant = forms.EmailField(max_length=150, widget=forms.TextInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1  LengText-email",
               'id': "InputFieldYourNumberPhonePer1",
               'placeholder': "Ваша электронная почта",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    company_email = forms.CharField(label='номер', widget=forms.NumberInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-yourNumberPhone",
               'id': "InputFieldEmailAddressPer1",
               'placeholder': "Ваш номер телефона",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))
    company_phone = forms.CharField(label='номер', widget=forms.NumberInput(
        attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-yourNumberPhone",
               'id': "InputFieldEmailAddressPer1",
               'placeholder': "Ваш номер телефона",
               'onmousedown': "mouseUp(this)",
               'onmouseup': "mouseUp(this)",
               'onchange': "mouseUp(this)",
               'onmouseover': "mouseUp(this)"}))

    class Meta:
        model = User
        fields = ('username', 'password', 'name', 'country', 'homecity',
                  'phone', 'email', 'name_company', 'company_business',
                  'name_applicant', 'company_email', 'company_phone')