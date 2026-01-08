from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


# Create your views here.
def guntur(request):
    return HttpResponse("Hello Guntur!!!")

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def galleri(request):
    return render(request, 'galleri.html')