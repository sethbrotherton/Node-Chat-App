const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");

  socket.on("createMessage", message => {
    console.log("createMessage", message);
  });

  socket.emit("newMessage", {
    from: "Jerry",
    text: `What's the deal with airplane peanuts`,
    sentAt: new Date()
  });

  socket.on("disconnect", () => {
    console.log("Someone disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
