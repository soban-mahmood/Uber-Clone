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
