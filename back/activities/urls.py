from django.urls import path

from .views import ActivitiesView, ActivitiesById

urlpatterns = [
    path('trainings/<int:training>/activities/', ActivitiesView.as_view()),
    path('trainings/<int:training>/activities/<int:id>', ActivitiesById.as_view()),
]
