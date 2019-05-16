from django.urls import path

from .views import ChronoView, ChronoViewById

urlpatterns = [
    path('chronos/', ChronoView.as_view()),
    path('chronos/<int:id>/', ChronoViewById.as_view()),
]
