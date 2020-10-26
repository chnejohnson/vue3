<template>
  <p>Example</p>

  <BaseButton @click="sendMsg">Send</BaseButton>

  <!-- <p>應繳金額: {{ state?.car?.cost }} 元</p>
  <p>你已經支付：{{ amount }} 元</p>
  <p>{{ status }}</p>
  <BaseButton @click="connect">連線</BaseButton>
  <BaseButton @click="close">取消</BaseButton> -->
</template>

<script lang="ts">
import { useGlobalState } from "../modules/useGlobalState";

export default {
  setup() {
    const state = useGlobalState();

    const sendMsg = () => {
      state.ws.send(JSON.stringify({ msg: "hey yo server" }));
    };
    return { sendMsg };
  },
};
</script>
