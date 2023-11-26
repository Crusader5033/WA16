



## Endpoints

### Register User - Add user to database

- **URL:** `/api/register`
- **Method:** `POST`
- **Request Body:**
  - `username` (string): The username of the user.
  - `password` (string): The password of the user.
- **Response:**
  - `201 Created`: User registered successfully.
  - `500 Internal Server Error`: An error occurred on the server.

### Login User - Check if user is in database 

- **URL:** `/api/login`
- **Method:** `POST`
- **Request Body:**
  - `username` (string): The username of the user.
  - `password` (string): The password of the user.
- **Response:**
  - `200 OK`: Login successful.
  - `401 Unauthorized`: Invalid username or password.
  - `500 Internal Server Error`: An error occurred on the server.

## How to Run

1. Install dependencies: Run `npm install` to install the required packages.
2. Start the server: Run `npm start` to start the server on port 3000.

## Server Configuration

The server is configured with the following parameters:

- **Server Address:** 193.85.203.188
- **Database:** prochazka6
- **User:** 
- **Password:** 
- **Options:**
  - `encrypt: true`
  - `trustServerCertificate: true`

## Frontend

The frontend of the application is designed to handle user registration and login. Additionally, there is a simple blog feature.

### How to Use the Frontend

1. Open `index.html` in a web browser.
2. Use the provided forms to register and login.
3. After logging in, you will be redirected to `homepage.html`.
4. The blog feature allows you to submit text and images.

