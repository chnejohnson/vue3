<template>
  <router-view></router-view>
</template>

<script>
import { useGlobalState } from "./modules/useGlobalState";
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    window.addEventListener("unhandledrejection", function (event) {
      console.log("listening on unhandledrejection", event);
      throw new Error(event); // 這不會被 vue.config.errorHandler 抓到，因為這是掛在 window 底下的
    });

    const ws = ref(null);
    ws.value = new WebSocket("ws://localhost:2222");

    ws.value.onopen = () => {
      console.log("websocket is open now");
      ws.value.send(JSON.stringify({ type: "begin", msg: "connection open" }));

      const state = useGlobalState();
      state.ws = ws.value;
    };

    ws.value.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === "heartbeat") {
        ws.value.send(JSON.stringify({ type: "heartbeat", status: "alive" }));
      }
    };

    ws.value.onclose = () => {
      throw new Error("Error: websocket is disconnected");
    };
  },
};
</script>
