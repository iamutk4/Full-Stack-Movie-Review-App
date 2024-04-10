# Full Stack Movie Review Application

This project is a Full Stack Movie Review Application built using Spring Boot with Java for the backend, ReactJS for the frontend, and MongoDB as the database. The application allows users to view a collection of movies, play trailers, read existing reviews, and submit their own reviews.

## Project Overview:

The application consists of a user-friendly interface where users can:
- Browse through a collection of movies
- Play trailers using ReactPlayer
- View existing reviews for each movie
- Submit new reviews using a form

## Workflow Overview:

1. **Backend Development (Java with Spring Boot):**
   - Implement RESTful APIs to handle requests from the frontend
   - Configure MongoDB as the database to store movie data and reviews
   - Create endpoints to retrieve movie information and manage reviews

2. **Frontend Development (ReactJS):**
   - Develop a user interface using ReactJS for displaying movies, trailers, and reviews
   - Utilize ReactPlayer to play trailers within the application
   - Implement forms for users to submit reviews and display existing reviews

3. **Integration and Data Management:**
   - Use Axios to configure API requests between the frontend and backend
   - Utilize ngrok to initiate a tunnel for local development and testing
   - Manage movie data and reviews in MongoDB, ensuring data consistency and integrity

## Libraries/Tech Stacks Used:

- **Backend:** Java, Spring Boot, MongoDB
- **Frontend:** ReactJS, React Player
- **Other Tools:** Axios, ngrok

## Usage:

1. Clone the repository:

```
git clone https://github.com/iamutk4/Full-Stack-Movie-Review-App.git
```
2. Setup MongoDB on the machine
3. Start the backend server by running `MoviesApplication.java` file present in:

   ```
   backend/src/main/java/app/netlify/utkarsh/movies/MoviesApplication.java
   ```
4. Navigate to frontend folder:

   ```
   cd frontend
   ```
5. Setup ngrok. Initiate the tunnel on which backend server is running by ``` ngrok http <port_number> ``` and paste the Forwarding URL in `baseURL` field in `axiosConfig.js` file present in:

   ```
   frontend/src/api/axiosConfig.js
   ```
6. Start the frontend development server:

   ```
   npm start
   ```
