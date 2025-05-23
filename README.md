# Health Appointment Booking System #

## Description

This is a simple full-stack Health Appointment Booking System built using the MERN stack (MongoDB, Express, React, Node.js). It allows patients to book appointments with doctors by providing details such as patient name, doctor name, date, time, and reason for visit. Users can also view all booked appointments.


## Tools Used

- **Node.js**: Backend runtime environment
- **Express.js**: Backend web framework
- **MongoDB**: NoSQL database for storing appointments
- **React.js**: Frontend UI library


## Project Structure


health-app/
├── backend/
│   └── server.js         # Backend Node.js + Express serve
└── frontend/
├── src/
│   └── App.js        # React frontend main component
└── package.json      # React app dependencies

## Setup Instructions

### Prerequisites

- Node.js and npm installed: https://nodejs.org/
- MongoDB installed and running locally: https://www.mongodb.com/try/download/community

### Backend Setup

1. Open terminal and navigate to the backend folder:
   bash
   cd health-app/backend


2. Initialize npm and install dependencies:
   bash
   npm init -y
   npm install express mongoose cors

3. Start MongoDB server if not running already (default port 27017):

   * On Windows, run `mongod` in a separate terminal.
   * On macOS/Linux, run `mongod` or use MongoDB service.

4. Run the backend server:
   bash
   node server.js

   The backend server will run on port 5000.

### Frontend Setup

1. Open a new terminal and navigate to the project root:
   bash
   cd health-app

2. Create React app (if not already created):
   bash
   npx create-react-app frontend

3. Navigate to the frontend folder:
   bash
   cd frontend

4. Install dependencies:
   bash
   npm install

5. Replace the contents of `src/App.js` with the provided frontend React code.

6. Start the React development server:
   bash
   npm start

   The frontend will run on [http://localhost:3000](http://localhost:3000)

### Usage

* Visit [http://localhost:3000](http://localhost:3000) to open the frontend.
* Fill the appointment form and click "Book".
* View the list of all booked appointments below the form.

### Notes

* Make sure MongoDB is running locally before starting backend.
* Backend runs on port 5000; frontend fetches data from this port.
* You can customize and extend this project by adding user authentication, appointment cancellation, and more.

### License

MIT License

### Author

Indhumathi

