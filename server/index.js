const express = require("express");
const http = require("http");
// const cors = require("cors");
// const socketIo = require("socket.io"); 
const mongoose = require("mongoose");
require("dotenv").config();
// require("./db")(); 

const app = express();
const server = http.createServer(app);




// app.use(cors({
//   origin: FRONTEND_URL,
//   credentials: true
// }));


// app.use(express.json());


// app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected Successfully from Backend!'))
.catch(err => {
    console.error('Database connection error:', err);
   
});

// העירי זמנית את Socket.IO
/*
const io = socketIo(server, {
  cors: {
    origin: FRONTEND_URL,
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);
  socket.on("send-song", (data) => {
    console.log("Song sent:", data);
    io.emit("receive-song", data);
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});
*/

app.get('/', (req, res) => {
  res.send('Minimal Backend is running!');
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));