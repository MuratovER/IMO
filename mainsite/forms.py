from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.forms import ModelForm
from .models import Profile, Faq, Speciality, Triadkey
from datetime import date
from phonenumber_field.formfields import PhoneNumberField
from phonenumber_field.widgets import PhonePrefixSelect
# from phonenumber_field.formfields import PhoneNumberField
from phonenumber_field.widgets import PhoneNumberPrefixWidget


class CreateUserForm(UserCreationForm):
    password1 = forms.CharField(label='пароль', widget=forms.PasswordInput(attrs={'class': "main_block_form_textPassword main_block_form_input_12 InputFieldPassword",
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
            'username':  forms.TextInput(attrs={'class': "main_block_form_textName main_block_form_input_12 InputFieldName",
                                                'id': "InputFieldName",
                                                'placeholder': "Придумайте имя пользователя",
                                                'onmousedown': "mouseUp(this)",
                                                'onmouseup': "mouseUp(this)",
                                                'onchange': "mouseUp(this)",
                                                'onmouseover': "mouseUp(this)"}),
            'password1': forms.PasswordInput()
        }


class ProfileForm(forms.ModelForm):
    # phone = PhoneNumberField(widget=PhoneNumberPrefixWidget(initial='GE'))
    phone = PhoneNumberField(widget=PhoneNumberPrefixWidget(initial='RU', attrs={'class': "select main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr button-Backcolor-text-black",
                                                                                 'id': "id_phone",
                                                                                 'data-tel-input': "",
                                                                                 'type': 'tel',
                                                                                 'placeholder': "Ваш номер телефона",
                                                                                 'onmousedown': "mouseUp(this)",
                                                                                 'onmouseup': "mouseUp(this)",
                                                                                 'onchange': "mouseUp(this)",
                                                                                 'onmouseover': "mouseUp(this)", }))

    class Meta:
        model = Profile
        fields = ['name', 'email', 'city', 'country',
                  'gender', 'birthdate', 'phone', 'citizenship']
        widgets = {
            'name': forms.TextInput(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-howCanICallYou button-Backcolor-text-black",
                                           'id': "id_name",
                                           'placeholder': "Как к Вам обращаться?",
                                           'onmousedown': "mouseUp(this)",
                                           'onmouseup': "mouseUp(this)",
                                           'onchange': "mouseUp(this)",
                                           'onmouseover': "mouseUp(this)", }),
            'email': forms.EmailInput(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-email button-Backcolor-text-black",
                                             'id': "id_email",
                                             'placeholder': "Ваша электронная почта",
                                             'onmousedown': "mouseUp(this)",
                                             'onmouseup': "mouseUp(this)",
                                             'onchange': "mouseUp(this)",
                                             'onmouseover': "mouseUp(this)", }),
            'city': forms.TextInput(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-yourLifeSity button-Backcolor-text-black",
                                           'id': "id_city",
                                           'placeholder': "Ваш родной город",
                                           'onmousedown': "mouseUp(this)",
                                           'onmouseup': "mouseUp(this)",
                                           'onchange': "mouseUp(this)",
                                           'onmouseover': "mouseUp(this)", }),
            'country': forms.TextInput(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr button-Backcolor-text-black",
                                              'id': "id_country",
                                              'placeholder': "Выберите Вашу страну",
                                              'onmousedown': "mouseUp(this)",
                                              'onmouseup': "mouseUp(this)",
                                              'onchange': "mouseUp(this)",
                                              'onmouseover': "mouseUp(this)", }),
            # 'phone': forms.NumberInput(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr",
            #                                 'id': "id_phone",
            #                                 'data-tel-input': "",
            #                                 'type': 'tel',
            #                                 'placeholder': "Ваш номер телефона",
            #                                 'onmousedown': "mouseUp(this)" ,
            #                                 'onmouseup': "mouseUp(this)" ,
            #                                 'onchange': "mouseUp(this)" ,
            #                                 'onmouseover': "mouseUp(this)",
            #                                 'style': "border-color: green;",}),
            'gender': forms.Select(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr button-Backcolor-text-black",
                                          'id': "id_gender",
                                          'placeholder': "Ваш пол",
                                          'onmousedown': "mouseUp(this)",
                                          'onmouseup': "mouseUp(this)",
                                          'onchange': "mouseUp(this)",
                                          'onmouseover': "mouseUp(this)", }),
            'birthdate': forms.DateInput(attrs={'class': "form-control main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr button-Backcolor-text-black",
                                                'id': "id_birthdate",
                                                # 'readonly': "readonly",
                                                'data-birth-input': "",
                                                'type': "date",
                                                'placeholder': "Ваш день рождения 2000-05-15",
                                                'onmousedown': "mouseUp(this)",
                                                'onmouseup': "mouseUp(this)",
                                                'onchange': "mouseUp(this)",
                                                'onmouseover': "mouseUp(this)", }),
            'citizenship': forms.TextInput(attrs={'class': "main_block_form_textName main_block_form_input_1 Iamastud_FORM1 LengText-selectYourCountr button-Backcolor-text-black",
                                                  'id': "id_citizenship",
                                                  'placeholder': "Вашe гражданство",
                                                  'onmousedown': "mouseUp(this)",
                                                  'onmouseup': "mouseUp(this)",
                                                  'onchange': "mouseUp(this)",
                                                  'onmouseover': "mouseUp(this)", })
        }


class FaqForm(forms.Form):
    from_email = forms.EmailField(required=True)
    name = forms.CharField(required=True)
    message = forms.CharField(widget=forms.Textarea, required=True)


# class TriadKey(forms.Form):
