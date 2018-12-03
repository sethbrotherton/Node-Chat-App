var socket = io();

socket.on("connect", function() {
  console.log("Connected to server");

  socket.emit("createMessage", {
    from: "George",
    text: "These pretzels are making me thirsty"
  });
});

socket.on("disconnect", function() {
  console.log("Disonnected from server");
});

socket.on("newMessage", function(message) {
  console.log("New message: ", message);
});
