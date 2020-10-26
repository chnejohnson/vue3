<template>
  <router-view></router-view>
</template>

<script>
import { useGlobalState } from "./modules/useGlobalState";
import { ref } from "vue";

export default {
  name: "App",
  setup() {
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
      console.log("Error: websocket is disconnected");
    };
  },
};
</script>
