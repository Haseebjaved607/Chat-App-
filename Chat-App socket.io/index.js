import express from 'express';
import { Server } from 'socket.io'
import path from 'path';
import http from 'http';


const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });


app.use(express.static(path.resolve("./public/index.html")));

app.get('/', (req, res) => {
    res.sendFile(path.resolve("./public/index.html"));
})


server.listen(7000, () => (console.log(`server listening on PORT:7000`)))