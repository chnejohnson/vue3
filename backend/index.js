const app = require("express")();
const cors = require("cors");
const ws = require("ws");

const cards = require("./data/cards.json");

app.use(cors());

app.get("/cards", (req, res) => {
  setTimeout(() => {
    res.send(cards);
    res.end();
  }, 2000);
});

app.get("/car/:license", (req, res) => {
  console.log("car_license", req.params.license);
  const l = req.params.license;

  setTimeout(() => {
    if (l === "EEE-8888") {
      res.send({
        inTime: "2020/03/10 19:07:58",
        outTime: "2020/03/20 19:07:58",
        cost: "30",
        license: "EEB-8888",
        paymentStatus: "2",
        time: 10
      });
    } else {
      res.send({
        error: "car not found"
      });
    }
  }, 2000);
});

// websocket
const wss = new ws.Server({ noServer: true });

// wss.on("connection", socket => {
//   socket.on("message", message => {
//     console.log(message);

//     wss.clients.forEach(function each(client) {
//       if (client.readyState === ws.OPEN) {
//         client.send(message);
//       }
//     });
//   });
// });

wss.on("open", () => {
  console.log("open");

  wss.send("server got the first connection.");
});

let interval;

let paymentInterval;
wss.on("connection", ws => {
  console.log("on connection");
  ws.on("message", msg => {
    console.log("client sent: ", msg);

    const data = JSON.parse(msg);

    let count = 0;
    if (data.type === "payment" && data.msg === "start") {
      console.log("start paying");

      paymentInterval = setInterval(() => {
        count++;
        ws.send(JSON.stringify({ type: "payment", amount: count }));
        console.log(count);
      }, 1000);
    }

    if (data.type === "payment" && data.msg === "stop") {
      clearInterval(paymentInterval);
      console.log("payment stopped");
    }
  });

  interval = setInterval(() => {
    const data = {
      type: "heartbeat"
    };
    ws.send(JSON.stringify(data));
  }, 5000);

  ws.on("close", () => {
    console.log("client close the connection");
    clearInterval(interval);
  });
});

// SSE
// app.get("/cash", function (req, res) {
//   res.writeHead(200, {
//     "Content-Type": "text/event-stream",
//     "Cache-Control": "no-cache",
//     Connection: "keep-alive"
//   });
//   res.connection.setTimeout(0);

//   console.log("start casting coins");

//   // wss.on("connection", socket => {
//   //   socket.on("message", message => {
//   //     res.write("data: " + message + "\n\n");
//   //   });
//   // });
//   let counter = 0;
//   const interval = setInterval(() => {
//     counter++;
//     console.log(counter);
//     res.write("data: " + counter + "\n\n");
//   }, 1000);

//   req.on("close", () => {
//     console.log("client close the connection");
//     clearInterval(interval);
//   });
// });

// function countdown(res, count) {
//   res.write("data: " + count + "\n\n");
//   if (count) setTimeout(() => countdown(res, count - 1), 1000);
//   else res.end();
// }

const server = app.listen("2222", () => {
  console.log("server is listening up on port 2222");
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, socket => {
    wss.emit("connection", socket, request);
  });
});
