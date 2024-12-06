# Messaging Application {Name not yet Thought of}

---

### Overview

The Idea for this project is to create a simple but scalable Messaging application that uses React for the Front-end and Node.js + Express for the Back-end. The Application will focus on trying to be Accessible and ensure usability across devices. After completion, I would like to take this application and create a Desktop and Mobile app. This Application is both a learning experience and a chance to explore real-time web applications. The goal is to create the foundation for a robust messaging system whilst trying to follow modern software design principles

### Technologies Used

- **Node.Js & Express:** Lightweight and fast server-side framework to handle messaging requests, API endpoints and facilitate communication between client and database.
- **argon2:** Argon2 for Password hashing and storing within database.
- **mysql2:** MySQL2 for connecting to MySQL Database using MySQL server 8.0+.
- **cors:** Cors to allow for cross-origin requests.
- **sockets.io:** Sockets.io for real-time messaging.
- **React:** React for building a dynamic user interface with reusable components.
- **Jest:** For Unit and Integration testing
- **Swagger:** For Documenting and maintaining API endpoints

### Goals

- User Authentication (e.g. Typical Login and/or OAuth).
- Real-time Messaging (e.g. Websockets).
- Responsive User-friendly UI for sending/receiving messages.
- Persistent Message Storage (e.g. MySQL).

### Optional Goals
- Support for Group chats.
- Mobile and Desktop App.
- Support for Media Sharing (e.g. Images, files).
- Notifications (e.g. Real-time Push Notifications).

### Roadmap
- Create BASE UI for Messaging Server
- Facilitate Real-time messages between users using a database to store messages (without User Authentication)

### Project Structure

- **server/** : Server-side code using Express and any other Server-side technologies used.
  - **src/** : source/program files for Node.js + Express backend.
    - **api/** : API endpoints
    - **database/** : MySQL Scripts and Configurations
- **client/** : Client-side code using React (or vanilla JS) for the UI.
  - **public/** : Will include any Static Assets such as images.
  - **src/** : source/program files for React frontend.
    - **components/** : Custom React Components.
    - **routes/** : React Router and Routes.
    - **views/** : Page views.
    - **app.jsx** : Entry point to app.

### API Documentation
- API will be documented and maintained with Swagger. No API docs as of yet, due to no progression of API
  
### Licensing

This project is licensed under the MIT License - See the LICENSE file for details.

---
