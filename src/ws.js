// import { useGlobalState } from "../modules/useGlobalState";

// import { ref, inject } from "vue";

// export const ws = Symbol("ws");

// export const useWebSocket = () => inject(ws);

// export const createWebsocket = () => {
//   console.log("create Websocket");

//   const ws = ref(null);
//   ws.value = new WebSocket("ws://localhost:2222");

//   ws.value.onopen = () => {
//     console.log("websocket is open now");
//     ws.value.send("client begin websocket connection");
//   };

//   ws.value.onmessage = e => {
//     console.log(e.data);
//   };

//   return {
//     ws
//   };
// };
