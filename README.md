# Fake-Zuri-Users API Documentation

This is an API that can be used to generate fake users. It will return
a payload that tell the client if the request is either successful or not.

> This API can be used to:

```
~ CREATE a user [ https://fake-zuri-users.herokuapp.com/api/users ]
```

```
~ UPDATE a user. [ https://fake-zuri-users.herokuapp.com/api/users/60a901638e119b00152f3814 ]
```

```
~ GET all user. [ https://fake-zuri-users.herokuapp.com/api/users ]
```

```
~ GET first N amount of users. [ https://fake-zuri-users.herokuapp.com/api/users/first/2 ]
```

```
~ GET  a user [ https://fake-zuri-users.herokuapp.com/api/users/60a901638e119b00152f3814 ]
```

```
~ DELETE user. [ https://fake-zuri-users.herokuapp.com/api/users/60a901638e119b00152f3814 ]
```

### _POST_ ~ Create a user

```
https://fake-zuri-users.herokuapp.com/api/users
```

> This is an endpoint to create a new user.

✅ A sucessful request will result in a 201 `CREATED` status code with a response body of user created.

> ❌ An unsucessful request will result in a 400 `BAD REQUEST` status code.

- _Example:_
  BODY raw request

```
{
    "fullName": "Darwin Francis",
    "email": "Darwin_f@yahoo.co.uk",
    "country": "America"
}
```

> Response

```
{
    "message": "successful",
    "data": {
        "_id": "60a901638e119b00152f3814",
        "fullName": "Darwin Francis",
        "email": "darwin_f@yahoo.co.uk",
        "country": "America",
        "__v": 0
    }
}
```

### _PUT_ ~ Update a user

```
https://fake-zuri-users.herokuapp.com/api/users/60a901638e119b00152f3814
```

> This is an endpoint to update a user.

✅ A sucessful request will result in a 200 `OK` status code with body response of the the modified user.

> ❌ An unsucessful request will result in a 400 `BAD REQUEST` status code.

- _Example:_
  BODY raw request

```
{
    "email": "Darwin_francis@gmail.com"
}
```

> Response

```
{
    "message": "successful",
    "data": {
        "_id": "60a901638e119b00152f3814",
        "fullName": "Darwin Francis",
        "email": "darwin_francis@gmail.com",
        "country": "America",
        "__v": 0
    }
}
```

### _GET_ ~ Get all user

```
https://fake-zuri-users.herokuapp.com/api/users
```

> This is an endpoint to get all user.

✅ A sucessful request will result in a 200 `OK` status code with body response of all user.

> ❌ An unsucessful request will result in a 404 `NOT FOUND` status code.

### _GET_ ~ Get first N amount of users

```
https://fake-zuri-users.herokuapp.com/api/users/first/2
```

> This is an endpoint to get first N amount of users.

✅ A sucessful request will result in a 200 `OK` status code with body response of the requested number of users.

> ❌ An unsucessful request will result in a 404 `NOT FOUND` status code or 400 `BAD REQUEST` if the the requested number of users is more than the already created user in the database.

- _Example:_

The endpoint above is used to get the first two (2) users.

> Response

```
{
    "message": "successful",
    "result": 2,
    "data": [
        {
            "_id": "60a7ad0987d55a3e50860243",
            "fullName": "Ayobami Oguntolu",
            "email": "ayobamiolugboyega@gmail.com",
            "country": "Nigeria",
            "__v": 0
        },
        {
            "_id": "60a8f44919b9580015ab67fd",
            "fullName": "Martin Hernandez",
            "email": "martinhez@yahoo.co.uk",
            "country": "Mexico",
            "__v": 0
        }
    ]
}
```

### _GET_ ~ Get a user

```
https://fake-zuri-users.herokuapp.com/api/users/60a901638e119b00152f3814
```

> This is an endpoint to get a user.

✅ A sucessful request will result in a 200 `OK` status code with body response of the requested user.

> ❌ An unsucessful request will result in a 404 `NOT FOUND` status code.

- _Example:_

> Response

```
{
    "message": "successful",
    "data": {
        "_id": "60a901638e119b00152f3814",
        "fullName": "Darwin Francis",
        "email": "darwin_francis@gmail.com",
        "country": "America",
        "__v": 0
    }
}
```

### _DELETE_ ~ Get a user

```
https://fake-zuri-users.herokuapp.com/api/users/60a901638e119b00152f3814
```

> This is an endpoint to delete a user.

✅ A sucessful request will result in a 204 `NO CONTENT` status code without a body response.

> ❌ An unsucessful request will result in a 404 `NOT FOUND` status code.

- _Example:_

> Response

```

```
