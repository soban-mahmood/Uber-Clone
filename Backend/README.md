# Uber Clone Backend

This repository contains the backend code for the Uber Clone application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Uber Clone Backend is a RESTful API built to support the functionalities of a ride-hailing application similar to Uber. It handles user authentication, ride requests, driver management, and more.

## Features

- User authentication and authorization
- Ride request and management
- Driver management
- Real-time ride tracking
- Payment processing

## Technologies

- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Socket.io for real-time communication

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/uber-clone-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd uber-clone-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. The server will be running at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

# User Registration and Login Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON response with the user details and an authentication token.

### Request Body:

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing the user's first name and last name.
  - `firstname`: A string representing the user's first name. It should be at least 3 characters long.
  - `lastname`: A string representing the user's last name. It should be at least 3 characters long.
- `email`: A string representing the user's email address. It should be a valid email format.
- `password`: A string representing the user's password. It should be at least 6 characters long.

### Example Request Body:

````json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}


Response:
The response will be a JSON object containing the user details and an authentication token.

Example Response:

  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d5a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4a2b7Z3f5e5e5e5e5e5",
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."



Status Codes:
201 Created: The user was successfully created.
400 Bad Request: The request body is invalid or missing required fields.
Validation Errors:
If the request body is invalid, the response will contain an array of validation errors.

Example Validation Error Response:

{
  "errors": [
    {
      "msg": "Invalid-Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name should be minimun 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password should be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}



How to Use:
Send a POST request to /users/register with the required fields in the request body.
Ensure the request body is in JSON format.
Handle the response according to the status codes and response structure provided above.

Example cURL Command:


curl -X POST http://localhost:4000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'


Endpoint: /users/login
Method: POST
Description:
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON response with the user details and an authentication token.

Request Body:
The request body should be a JSON object containing the following fields:

email: A string representing the user's email address. It should be a valid email format.
password: A string representing the user's password. It should be at least 6 characters long.
Example Request Body:


{
  "email": "john.doe@example.com",
  "password": "password123"
}


Response:
The response will be a JSON object containing the user details and an authentication token.

Example Response:


{
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d5a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4a2b7Z3f5e5e5e5e5e5",
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


Status Codes:
200 OK: The user was successfully logged in.
400 Bad Request: The request body is invalid or missing required fields.
401 Unauthorized: The email or password is incorrect.
Validation Errors:
If the request body is invalid, the response will contain an array of validation errors.

Example Validation Error Response:


{
  "errors": [
    {
      "msg": "Invalid-Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "password should be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

How to Use:
Send a POST request to /users/login with the required fields in the request body.
Ensure the request body is in JSON format.
Handle the response according to the status codes and response structure provided above.
Example cURL Command:


curl -X POST http://localhost:4000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'


Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.


I will now save this content in the `README.md` file in the `backend` folder.

```markdown
# User Registration and Login Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON response with the user details and an authentication token.

### Request Body:
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing the user's first name and last name.
  - `firstname`: A string representing the user's first name. It should be at least 3 characters long.
  - `lastname`: A string representing the user's last name. It should be at least 3 characters long.
- `email`: A string representing the user's email address. It should be a valid email format.
- `password`: A string representing the user's password. It should be at least 6 characters long.

### Example Request Body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}



Response:
The response will be a JSON object containing the user details and an authentication token.

Example Response:


{
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d5a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4a2b7Z3f5e5e5e5e5e5",
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


Status Codes:
201 Created: The user was successfully created.
400 Bad Request: The request body is invalid or missing required fields.
Validation Errors:
If the request body is invalid, the response will contain an array of validation errors.

Example Validation Error Response:


{
  "errors": [
    {
      "msg": "Invalid-Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name should be minimun 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password should be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}


ow to Use:
Send a POST request to /users/register with the required fields in the request body.
Ensure the request body is in JSON format.
Handle the response according to the status codes and response structure provided above.
Example cURL Command:


curl -X POST http://localhost:4000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'


Endpoint: /users/login
Method: POST
Description:
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON response with the user details and an authentication token.

Request Body:
The request body should be a JSON object containing the following fields:

email: A string representing the user's email address. It should be a valid email format.
password: A string representing the user's password. It should be at least 6 characters long.
Example Request Body:


{
  "email": "john.doe@example.com",
  "password": "password123"
}


Response:
The response will be a JSON object containing the user details and an authentication token.

Example Response:
{
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d5a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36Zf4a2b7Z3f5e5e5e5e5e5",
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}


Status Codes:
200 OK: The user was successfully logged in.
400 Bad Request: The request body is invalid or missing required fields.
401 Unauthorized: The email or password is incorrect.
Validation Errors:
If the request body is invalid, the response will contain an array of validation errors.

Example Validation Error Response:
How to Use:
Send a POST request to /users/login with the required fields in the request body.
Ensure the request body is in JSON format.
Handle the response according to the status codes and response structure provided above.
Example cURL Command:
Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details. ```



{
  "errors": [
    {
      "msg": "Invalid-Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "password should be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}



How to Use:
Send a POST request to /users/login with the required fields in the request body.
Ensure the request body is in JSON format.
Handle the response according to the status codes and response structure provided above.
Example cURL Command:


curl -X POST http://localhost:4000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'


Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details. ```
````
