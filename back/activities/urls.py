from django.urls import path

from .views import ActivitiesView, ActivitiesById

urlpatterns = [
    path('plantrainings/<int:plantraing>/trainings/'
         '<int:training>/activities', ActivitiesView.as_view()),
    path('plantrainings/<int:plantraing>/trainings/'
         '<int:training>/activities/<int:id>', ActivitiesById.as_view()),
]
