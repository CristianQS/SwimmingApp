from django.urls import path

from .views import ChronoView

urlpatterns = [
    path('chronos/', ChronoView.as_view()),
]