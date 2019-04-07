def getJSON(token, user):
    return [
        {"token": token, "id": user['id'], "username": user['username']}
    ]
