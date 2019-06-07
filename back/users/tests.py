import jwt
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, RequestsClient, APIClient
from .models import User


class UserTests(APITestCase):
    def setUp(self):
        self.username = "pepe"
        self.description = "des2"
        self.password = "ps"
        self.email = "a@a"
        self.userType = 2
        self.club = 1
        self.user = User.objects.create(username=self.username, password=self.password, email=self.email,
                                        description=self.description, userType=self.userType,
                                        club=self.club)

    def test_get_users_by_club(self):
        """
        Ensure we can create a new account object.
        """
        self.user = User.objects.get(username="pepe")
        client = APIClient()
        payload = {
            'id': self.user.id,
            'email': self.user.email,
        }
        client.credentials(HTTP_AUTHORIZATION='Bearer' + str(jwt.encode(payload, "SECRET_KEY")))

        response = client.get('/users/clubs/1')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get(username="pepe").username, 'pepe')

    def test_delete_user(self):
        self.user = User.objects.create(username="paco", password="paquito", email="b@b",
                                        description="des", userType=2,
                                        club=2)
        client = APIClient()
        payload = {
            'id': self.user.id,
            'email': self.user.email,
        }
        client.credentials(HTTP_AUTHORIZATION='Bearer' + str(jwt.encode(payload, "SECRET_KEY")))
        response = client.delete('/users/'+str(self.user.id))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
