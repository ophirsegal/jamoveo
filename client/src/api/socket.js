import { io } from "socket.io-client";

const socket = io(
  process.env.REACT_APP_SOCKET_URL || "https://jamoveo-production-46cf.up.railway.app",
  {
    transports: ["websocket"],
  }
);

export default socket;