const ws = require("ws");

const client = new ws("ws://localhost:2222");

client.on("open", () => {
  // Causes the server to print "Hello"
  client.send(30);
  client.close();
});

// client.on("message", function incoming(data) {
//   console.log(data);
// });
