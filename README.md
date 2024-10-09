# Weather App

A simple weather application that fetches current weather data from [Open-Meteo API](https://open-meteo.com) based on geographical coordinates.

## Features

- Displays current temperature and weather condition for Vancouver, BC.
- Single-page application with routing.

## Technologies Used

- **Frontend**: React, TypeScript, Apollo Client, GraphQL
- **Styling**: Sass
- **Backend**: Apollo Server with Pothos for GraphQL schema

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/edinarostas/weather-app.git
   cd weather-app
   ```
   
### 2. Set Up the Backend

#### Navigate to the Backend Directory
```bash
cd backend
```
#### Install Backend Dependencies

Run the following command to install the required backend dependencies:

```bash
npm install
```

#### Set Up Environment Variables for the Backend

Create a  `.env`  file in the  `backend`  from the existing `.env.sample` file 

#### Start the Backend Server

To start the backend server, run:
```bash
npm start
```
The backend server will be available at  `http://localhost:4000`

### 3. Set Up the Frontend

#### Navigate to the Frontend Directory
```bash
cd ../frontend
```
#### Install Frontend Dependencies

Run the following command to install the required frontend dependencies:
```bash
npm install
```
#### Start the Frontend Application

To start the frontend development server, run:
```bash
npm start
```

The frontend application will be available at  `http://localhost:3000`.