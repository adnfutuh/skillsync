import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

app.get("/", (req, res) => {
  res.json({ message: "API Running..." });
});

httpServer.listen(process.env.PORT || 5000, () => {
  console.log("Server running...");
});
