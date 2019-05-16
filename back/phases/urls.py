from django.urls import path

from .views import PhaseView

urlpatterns = [
    path('chronos/<int:idchrono>/phases/', PhaseView.as_view()),
]