
# JaMoveo – Web Rehearsal App

This project was developed as part of Moveo’s coding challenge. It is a web app designed to support real-time music rehearsals by connecting musicians and displaying synchronized lyrics and chords.

## Features

- **Signup & Login**:
  - Users can register with a username, password, and instrument.
  - Admins can sign up and manage the session.
  - Authenticated users are redirected based on their role.

- **Admin Functionality**:
  - Admins can search for a song by name (in English or Hebrew).
  - Matching songs are displayed with their title, artist, and image.
  - Admin can start a session that pushes the selected song to all connected clients.

- **Live Session**:
  - Players see lyrics, with or without chords based on their role.
  - Auto-scroll and contrast options available for easy readability.
  - Admin can quit the session at any time.

## Tech Stack

- **Frontend**: React.js (React Router, Bootstrap)
- **Backend**: Node.js (Express)
- **Database**: MongoDB (via Mongoose)
- **Real-Time**: Socket.IO
- **Deployment**: Railway (backend), Vercel (frontend)

## How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/jamoveo.git
cd jamoveo
```

### 2. Setup Server
```bash
cd server
npm install
npm start
```

### 3. Setup Client
```bash
cd ../client
npm install
npm start
```

## Environment Variables and Deployment Notes

To avoid hardcoding the backend URL in the client code, we use a `.env` file to store environment variables.

### Client `.env` Setup

In the `/client` folder, create a `.env` file and define:

```
REACT_APP_API_URL=https://tender-endurance-production-13a0.up.railway.app/api
```

Then, in `client/src/api/api.js`, use:

```js
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default api;
```

Make sure not to commit `.env` to GitHub – it should be listed in `.gitignore`.

### Vercel Environment Variable

To make it work in production (Vercel):

1. Go to your project’s settings in [Vercel](https://vercel.com).
2. Navigate to “Environment Variables”.
3. Add:
   - Key: `REACT_APP_API_URL`
   - Value: `https://tender-endurance-production-13a0.up.railway.app/api`
4. Save and trigger a redeploy.

This allows secure and flexible configuration between development and production environments.
