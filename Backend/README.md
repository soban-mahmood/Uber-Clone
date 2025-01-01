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

# API Documentation

## Authentication Endpoints

### 1. Register User
**Endpoint:** `/users/register`
**Method:** POST

#### Request Body:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses:
- **201 Created**: User successfully registered
  ```json
  {
    "user": {
      "_id": "60c72b2f9b1e8b001c8e4d5a",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **400 Bad Request**: Validation errors

### 2. Login User
**Endpoint:** `/users/login`
**Method:** POST

#### Request Body:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

#### Responses:
- **200 OK**: Successfully logged in
  - Sets HTTP-only cookie with token
  - Returns user data and token in response body
- **401 Unauthorized**: Invalid credentials
- **400 Bad Request**: Validation errors

### 3. Get User Profile
**Endpoint:** `/users/profile`
**Method:** GET
**Authentication:** Required (Bearer Token)

#### Responses:
- **200 OK**: Returns user profile data
- **401 Unauthorized**: Invalid or missing token

### 4. Logout User
**Endpoint:** `/users/logout`
**Method:** GET
**Authentication:** Required (Bearer Token)

#### Responses:
- **200 OK**: Successfully logged out
  - Clears auth cookie
  - Blacklists the token
- **401 Unauthorized**: Invalid or missing token

### 5. Create Captain Account
**Endpoint:** `/captains/register`
**Method:** POST

#### Request Body:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "vehicle": {
        "color": "Black",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

#### Validation Rules:
- `email`: Must be a valid email format
- `fullname.firstname`: Minimum 3 characters
- `password`: Minimum 6 characters
- `vehicle.color`: Minimum 3 characters
- `vehicle.plate`: Minimum 3 characters
- `vehicle.capacity`: Must be at least 1
- `vehicle.vehicleType`: Must be one of: "car", "motorcycle", "auto"

#### Responses:
- **201 Created**: Captain successfully registered
  ```json
  {
      "captain": {
          "fullname": {
              "firstname": "John",
              "lastname": "Doe"
          },
          "email": "john.doe@example.com",
          "vehicle": {
              "color": "Black",
              "plate": "ABC123",
              "capacity": 4,
              "vehicleType": "car"
          },
          "status": "inactive",
          "_id": "generated_id"
      },
      "token": "JWT_TOKEN"
  }
  ```
- **400 Bad Request**: 
  - When validation fails:
    ```json
    {
        "errors": [
            {
                "msg": "Invalid Email",
                "param": "email",
                "location": "body"
            }
        ]
    }
    ```
  - When captain already exists:
    ```json
    {
        "message": "captain already exists"
    }
    ```

#### Notes:
- Password is automatically hashed before storage
- JWT token is generated and returned upon successful registration
- Initial captain status is set to "inactive"
- Response includes both captain object and authentication token

## Captain Endpoints

### 1. Register Captain
**Endpoint:** `/captains/register`
**Method:** POST

#### Request Body:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "password123",
    "vehicle": {
        "color": "Black",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

#### Success Response (201 Created):
```json
{
    "captain": {
        "_id": "60c72b2f9b1e8b001c8e4d5a",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "Black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "status": "inactive"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. Login Captain
**Endpoint:** `/captains/login`
**Method:** POST

#### Request Body:
```json
{
    "email": "john@example.com",
    "password": "password123"
}
```

#### Success Response (200 OK):
```json
{
    "captain": {
        "_id": "60c72b2f9b1e8b001c8e4d5a",
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "vehicle": {
            "color": "Black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "status": "inactive"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Error Response (401 Unauthorized):
```json
{
    "message": "Invalid email or password"
}
```

### 3. Get Captain Profile
**Endpoint:** `/captains/profile`
**Method:** GET
**Authentication:** Required (Bearer Token)

#### Headers:
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Success Response (200 OK):
```json
{
    "_id": "60c72b2f9b1e8b001c8e4d5a",
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john@example.com",
    "vehicle": {
        "color": "Black",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    },
    "status": "inactive",
    "location": {
        "lat": null,
        "lng": null
    }
}
```

### 4. Logout Captain
**Endpoint:** `/captains/logout`
**Method:** GET
**Authentication:** Required (Bearer Token)

#### Headers:
```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Success Response (200 OK):
```json
{
    "message": "Logout successfully"
}
```

#### Notes:
- All authenticated endpoints require a valid JWT token in the Authorization header
- Token is automatically blacklisted on logout
- Login endpoint sets an HTTP-only cookie with the token
- Password is never returned in any response
- All error responses include appropriate HTTP status codes and error messages





