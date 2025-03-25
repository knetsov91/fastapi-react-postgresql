import jwt 
from jwt import JWT, supported_key_types

def generate_jwt(payload, secret,alg= "HS256"):
    secret_ = supported_key_types()['oct'](str.encode(secret))
    return JWT().encode(payload=payload, key=secret_, alg=alg)

def validate_jwt_token(jwt_token, secret, alg="HS256"):
    secret_ = supported_key_types()['oct'](str.encode(secret))
    try:
        return JWT().decode(jwt_token, key=secret_,alg=alg)
    except jwt.ExpiredSignatureError:
        print("Expired token")
        raise jwt.ExpiredSignatureError
    except jwt.InvalidTokenError:
        print("Invalid. Access denied")
        raise jwt.InvalidTokenError
