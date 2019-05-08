from django.urls import path

from .views import Login, CreateUser, FindUserByName, \
    UsersById, Authenticate, UsersByClub

urlpatterns = [
    path('auth/login/', Login.as_view()),
    path('authenticate/', Authenticate().as_view()),
    path('signup/', CreateUser.as_view()),
    path('users', FindUserByName.as_view()),
    path('users/<int:id>', UsersById.as_view()),
    path('users/clubs/<int:id>', UsersByClub.as_view()),
]
