<template>
  <p>現金繳費</p>
  <BaseButton @click="startPaying">Start</BaseButton>

  <hr />

  <BaseButton @click="stopPaying">Stop</BaseButton>

  <hr />

  <router-link to="/example" v-slot="{ navigate }">
    <BaseButton @click="navigate">to Example page</BaseButton>
  </router-link>

  <router-link to="/" v-slot="{ navigate }">
    <BaseButton @click="navigate">back to Home</BaseButton>
  </router-link>

  <p>Amount: {{ amt }}</p>
  <!-- <p>應繳金額: {{ state?.car?.cost }} 元</p>
  <p>你已經支付：{{ amount }} 元</p>
  <p>{{ status }}</p>
  <BaseButton @click="connect">連線</BaseButton>
  <BaseButton @click="close">取消</BaseButton> -->
</template>

<script lang="ts">
import { onUnmounted, ref } from "vue";
import { useGlobalState } from "../modules/useGlobalState";

export default {
  setup() {
    const state = useGlobalState();
    const client = state.ws;

    const startPaying = () => {
      client.send(
        JSON.stringify({
          type: "payment",
          msg: "start",
        })
      );
    };

    const stopPaying = () => {
      client.send(
        JSON.stringify({
          type: "payment",
          msg: "stop",
        })
      );
    };

    const amt = ref(0);

    client.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (data.type === "payment") {
        amt.value = data.amount;
        console.log("new amount: ", data.amount);
      }
    };

    return {
      startPaying,
      stopPaying,
      amt,
    };
  },
};
</script>
