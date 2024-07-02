# Node-js-Blog-Website

Node-js-Blog-Website is a blogging application built with Node.js, Express, and MongoDB. It allows users to create, read and delete blog posts.

## Features

- Create new blog posts
- Read existing blog posts
- Delete blog posts

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Setup and Installation

1. Clone the repository

    ```bash
    git clone https://github.com/Aminemsaq/Node-js-Blog-Website.git
    cd Node-js-Blog-Website
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI

    ```plaintext
    MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
    ```

4. Run the application

    ```bash
    npm start
    ```

    The application will be running on `http://localhost:3000`.


