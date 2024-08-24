import http from "http";
import express from "express";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
        // console.log("a new user message", message);
        io.emit("message", message)

    })
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve('./public/app.html'));
});

server.listen(9000, () => console.log(`Server started at PORT: 9000`));
