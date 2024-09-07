# React-Application-with-RESTful-API

This is a React front-end application and a NodeJS (with Express) back-end which allows user to register, login and view their details. Data is stored via MongoDB (locally hosted) and Brcypt Encryption is used for password hashing. JSON Web Tokens are also utilised for authentication.

**Home**
![Home.png](/frontend/readme/home.png?raw=true)

**Registration**
![Registration.png](/frontend/readme/registration.png?raw=true)

**Login**
![Login.png](/frontend/readme/login.png?raw=true)

# Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Launching the Application](#launching-the-application)

## Requirements

**This React application requires the following to operate:**

1. [Visual Studio Code](https://code.visualstudio.com/)
2. [NodeJS](https://nodejs.org/en/)
3. [MongoDB Community Edition](https://www.mongodb.com/try/download/community/)

## Installation

1. Clone the GitHub repository using the following command: **`git clone https://github.com/VaibhavGuela/React-Application-with-RESTful-API.git`**.
2. Navigate to the cloned repository through Visual Studio Code and open the frontend directory (path: **`/React-Application-with-RESTful-API/frontend`**).
3. Open the terminal in Visual Studio Code (ensuring you are in the path given in the previous step) and run the following command: **`npm install`**.
4. Open the backend directory (path: **`/React-Application-with-RESTful-API/backend`**) and run the following command via the terminal in Visual Studio Code: **`npm install`**.

## Launching the Application

**Note: Before proceeding ensure both ports (`3000` & `3001`) are not in use.**

1. Launch the MongoDB Community Server on your local machine. More instructions can be found [here].(https://www.mongodb.com/docs/manual/administration/install-community/)
2. Launch the back end service (defaulted to **`PORT 3000`**) by navigating to the following path (in Visual Studio Code) and running the **`npm start`** command: **`/React-Application-with-RESTful-API/frontend`**.
3. Launch the back end service (defaulted to **`PORT 3001`**) by navigating to the following path (in Visual Studio Code) and running the **`node server`** command: **`/React-Application-with-RESTful-API/backend`**.
