from datetime import datetime, timedelta
import jwt
from django.conf import settings

def generate_jwt_token(user):
    """
    Generates a JWT token for the given user
    """
    access_token_expiration = datetime.utcnow() + timedelta(days=1)
    access_token_payload = {
        'user_id': user.id,
        'exp': access_token_expiration
    }
    access_token = jwt.encode(access_token_payload, settings.SECRET_KEY, algorithm='HS256')

    return {
        'access_token': access_token,
        'token_type': 'Bearer',
        'expires_in': access_token_expiration
    }