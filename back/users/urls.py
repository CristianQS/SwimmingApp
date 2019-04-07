from django.urls import path

from .views import Login

urlpatterns = [
    path('auth/login/', Login.as_view()),
]