from rest_framework import status, exceptions
from rest_framework.authentication import get_authorization_header, BaseAuthentication
from rest_framework.response import Response

from .models import User
import jwt


class TokenAuthentication(BaseAuthentication):
    model = None

    def get_model(self):
        return User

    def authenticate(self, request):
        auth = get_authorization_header(request).split()
        if not auth or auth[0].lower() != b'token':
            return None

        if len(auth) == 1:
            msg = 'Invalid token header. No credentials provided.'
            raise exceptions.AuthenticationFailed(msg)
        elif len(auth) > 2:
            msg = 'Invalid token header'
            raise exceptions.AuthenticationFailed(msg)

        try:
            token = auth[1]
            if token == "null":
                msg = 'Null token not allowed'
                raise exceptions.AuthenticationFailed(msg)
        except UnicodeError:
            msg = 'Invalid token header. Token string should not contain invalid characters.'
            raise exceptions.AuthenticationFailed(msg)

        return self.authenticate_credentials(token)

    def authenticate_credentials(self, token):
        model = self.get_model()
        payload = jwt.decode(token, "SECRET_KEY")
        email = payload['email']
        userid = payload['id']
        msg = {'Error': "Token mismatch", 'status': status.HTTP_401_UNAUTHORIZED}
        try:

            user = User.objects.get(
                email=email,
                id=userid,
            )

            #if not user.token['token'] == token:
            #    raise exceptions.AuthenticationFailed(msg)

        except jwt.ExpiredSignature or jwt.DecodeError or jwt.InvalidTokenError:
            return Response({'Error': "Token is invalid"}, status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist:
            return Response({'Error': "Internal server error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return user, token

    def authenticate_header(self, request):
        return 'Token'
