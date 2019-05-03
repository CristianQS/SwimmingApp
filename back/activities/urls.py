from django.urls import path

from .views import ActivitiesView, ActivitiesById

urlpatterns = [
    path('plantrainings/<int:plantraining>/trainings/'
         '<int:training>/activities', ActivitiesView.as_view()),
    path('plantrainings/<int:plantraining>/trainings/'
         '<int:training>/activities/<int:id>', ActivitiesById.as_view()),
]
