import jwt
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from .models import PlanTraining
from users.models import User


class PlanTrainingTests(APITestCase):
    def setUp(self):
        self.name = "plan2"
        self.description = "des2"
        self.users = self.setUpUser()
        self.plan = PlanTraining.objects.create(name=self.name, description=self.description)
        self.plan.user.add(self.users)
        return self.plan

    def setUpUser(self):
        self.username = "pepe"
        self.description = "des2"
        self.password = "ps"
        self.email = "a@a"
        self.userType = 2
        self.club = 1
        self.user = User.objects.create(username=self.username, password=self.password, email=self.email,
                                        description=self.description, userType=self.userType,
                                        club=self.club)
        return self.user

    def test_get_plantraining_by_userid(self):
        """
        Ensure we can create a new account object.
        """
        client = APIClient()
        self.user = User.objects.get(username="pepe")
        payload = {
            'id': self.user.id,
            'email': self.user.email,
        }
        client.credentials(HTTP_AUTHORIZATION='Bearer' + str(jwt.encode(payload, "SECRET_KEY")))

        url = '/plantrainings?userid='+str(self.user.id)

        response = client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post_plantraining_by_userid(self):
        """
        Ensure we can create a new account object.
        """
        client = APIClient()
        self.user = User.objects.get(username="pepe")
        payload = {
            'id': self.user.id,
            'email': self.user.email,
        }
        client.credentials(HTTP_AUTHORIZATION='Bearer' + str(jwt.encode(payload, "SECRET_KEY")))

        data = {
            "user": [self.user.id],
            "name": "plan",
            "description": "des"
        }
        url = '/plantrainings'

        response = client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_plantraining_by_id(self):
        """
        Ensure we can create a new account object.
        """
        client = APIClient()
        self.user = User.objects.get(username="pepe")
        payload = {
            'id': self.user.id,
            'email': self.user.email,
        }
        client.credentials(HTTP_AUTHORIZATION='Bearer' + str(jwt.encode(payload, "SECRET_KEY")))

        planid = PlanTraining.objects.get(name="plan2").id
        url = '/plantrainings/'+str(planid)

        response = client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_plantraining_by_id(self):
        """
        Ensure we can create a new account object.
        """
        client = APIClient()
        self.user = User.objects.get(username="pepe")
        payload = {
            'id': self.user.id,
            'email': self.user.email,
        }
        client.credentials(HTTP_AUTHORIZATION='Bearer' + str(jwt.encode(payload, "SECRET_KEY")))
        planid = PlanTraining.objects.get(name="plan2").id
        url = '/plantrainings/'+str(planid)

        response = client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
