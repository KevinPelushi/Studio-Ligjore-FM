from django.core.mail import send_mail
from django.shortcuts import render

from Avokati import settings

def home_page(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        surname = request.POST.get('surname')
        email = request.POST.get('email')
        comment = request.POST.get('comment')
        send_mail(
            f'Mesazh i ri nga website',
            f'Pershendetje Z.Avokat ke marre nje mesazh te ri nga website. Emri: {name}, Mbiemri: {surname}, Email: {email}, Comment: {comment}',
            settings.EMAIL_HOST_USER,
            ['fm.studioavokatie@gmail.com'] 
        )

        

    return render(request, 'main.html')

