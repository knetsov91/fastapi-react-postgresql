import jwt

def validate_jwt_token(jwt_token, secret, alg="HS256"):
    try:
        return jwt.decode(jwt_token, key=secret,algorithms=alg)
    except jwt.ExpiredSignatureError:
        print("Expired token")
        raise jwt.ExpiredSignatureError
    except jwt.InvalidTokenError:
        print("Invalid. Access denied")
        raise jwt.InvalidTokenError
