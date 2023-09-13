# Project
This application is a MERN stack to-do application which is used to maintain user's to do's in a productive and user friendly manner. 

# Description
You Need A To Do is a single-page application (SPA) with Typescript, created using `npx create-create-app` command. The server (backend) is built using `Node` and `Express`. 

# Production Environment 
- [You Need A To Do](https://you-need-a-to-do.onrender.com)

# Backend Overview
The backend of this application is built using Node.js and the Express framework, providing a powerful, yet lightweight web server environment. The codebase is modularized into routes and middleware to improve readability and maintainability.

## Key Features
### Environment Variable Management
Utilizes dotenv for environment variable management, making it easy to configure variables such as the database URL and JWT secrets.
### Database Connection
Utilizes a custom connectDB function to connect to a MongoDB database. This allows for robust, scalable data storage that can be queried in real-time.
### JSON Web Token (JWT) Authentication
The backend employs JSON Web Tokens (JWT) for authentication. JWT is a compact, URL-safe means of representing claims to be transferred between two parties. This enables secure, token-based authentication for user routes.
### Middleware
Employs custom error-handling middleware (notFound and errorHandler) to elegantly handle 404 Not Found errors and other types of server errors, improving user experience.
### Body Parsing
Uses express.json() and express.urlencoded() as middleware for parsing incoming JSON and URL-encoded data. This makes it easier to handle incoming requests from the client.
### Cookie Management
Utilizes cookie-parser middleware to parse cookies in the incoming requests, thereby facilitating session-based operations.
### API Routing
Routes for managing todo items (todoRoutes) and users (userRoutes) are separated into their own files, making the codebase easier to manage and extend.
### Production and Development Environments
The backend is set up to identify whether it's running in a production or development environment. In a production setting, it serves static files from the client/build directory and redirects all non-API routes to the index.html file. In a development setting, it simply shows a message stating that the "API is running."

# Login 
![image](https://github.com/EamonnHegarty/you-need-a-to-do/assets/91144434/c58c0b80-542b-428f-8297-1a9be672be93)

# Dashboard 
![image](https://github.com/EamonnHegarty/you-need-a-to-do/assets/91144434/28e6a6e6-13c8-4d31-81d4-0febdc81b0e7)

