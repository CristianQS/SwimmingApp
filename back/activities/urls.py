from django.urls import path

from .views import ActivitiesView

urlpatterns = [
    path('trainings/<int:training>/activities/', ActivitiesView.as_view()),
]
