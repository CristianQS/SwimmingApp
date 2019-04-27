from django.urls import path

from .views import TrainingById, TrainingsView

urlpatterns = [
    path('plantrainings/<int:plantraining>/trainings', TrainingsView.as_view()),
    path('plantrainings/<int:plantraining>/trainings/<int:id>', TrainingById.as_view()),
]