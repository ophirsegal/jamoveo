# JaMoveo
# JaMoveo – Real-Time Rehearsal Web App

JaMoveo is a full-stack web application designed to enhance musical rehearsals by allowing musicians to connect via their phones, register with their instrument, and join live rehearsal sessions.

## Features

- **Signup & Login**: Users can sign up with their username, password, and instrument. Admins can register from a separate page.
- **Role-Based Navigation**: Admin users can create sessions and broadcast songs; players are directed to a waiting screen and then see the song content when selected.
- **Song Search**: Admins can search songs in English or Hebrew by title or artist.
- **Live Display**: All users see song lyrics; players with instruments see chords, singers see only lyrics.
- **Auto Scroll**: Toggle slow scrolling during live display.
- **Responsive UI**: High contrast and large font for visibility in smoky environments.
- **Real-Time Sync**: Built with Socket.IO for real-time updates across all users.

## Tech Stack

- **Frontend**: React, Bootstrap, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (with Mongoose)
- **WebSockets**: Socket.IO
- **Authentication**: JWT + bcrypt
- **Deployment**: Localhost (or replace with deployed URL)

## Setup Instructions

### Backend

1. Navigate to the `server/` directory.
2. Create a `.env` file with the following:
    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
3. Run the server:
    ```bash
    npm install
    npm start
    ```

### Frontend

1. Navigate to the root project directory.
2. Run the frontend:
    ```bash
    npm install
    npm start
    ```

## User Instructions

- **Regular User**:
  - Sign up via `/signup`
  - Login via `/`
  - Wait for admin to start a session and view songs in real-time

- **Admin User**:
  - Sign up via `/admin-signup`
  - Login as `admin` via `/`
  - Search and select songs to broadcast

## Notes

- All songs are preloaded from a local JSON file (`songsData.json`).
- Roles are saved in `localStorage` to determine view behavior.
- Ensure both server and client are running for real-time features to work.

## Author

Developed by Ophir Segal as part of a Moveo coding challenge.