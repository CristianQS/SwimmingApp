from django.urls import path

from .views import PlanTrainingsView, PlanTrainingById

urlpatterns = [
    path('plantrainings', PlanTrainingsView.as_view()),
    path('plantrainings/<int:id>',PlanTrainingById.as_view()),
]