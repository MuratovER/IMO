from django.shortcuts import render


def home_page(request):
    return render(request, 'mainsite/home/home_page.html')