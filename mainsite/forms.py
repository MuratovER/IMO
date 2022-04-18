from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms



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
		fields = ['username', 'email', 'password1']
		widgets = {
			'username':  forms.TextInput(attrs={'class': "main_block_form_textName main_block_form_input_1 InputFieldName",
                                                                            'id': "InputFieldName", 
                                                                            'placeholder': "Придумайте имя пользователя",
                                                                            'onmousedown': "mouseUp(this)",
                                                                            'onmouseup': "mouseUp(this)",
                                                                            'onchange': "mouseUp(this)",
                                                                            'onmouseover': "mouseUp(this)"}),
			'email':     forms.EmailInput(attrs={'class': 'form-input'}),	
			'password1': forms.PasswordInput()																					
		}