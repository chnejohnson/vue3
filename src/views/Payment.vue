<template>
  <p>應繳金額: {{ state?.car?.cost }} 元</p>
  <p>你已經支付：{{ amount }} 元</p>
  <p>{{ status }}</p>
  <BaseButton @click="connect">連線</BaseButton>
  <BaseButton @click="close">取消</BaseButton>
</template>

<script lang="ts">
import { computed, ref, watch, watchEffect } from "vue";
import { useWebSocket } from "@vueuse/core";
import { useEventSource } from "../modules/useEventSource";
import { useGlobalState } from "../modules/useGlobalState";

export default {
  setup() {
    const amount = ref<number>(0);

    // const ws = new WebSocket("ws://localhost:2222");

    // ws.onmessage = function (e) {
    //   amount.value += Number(e.data);
    // };

    const { data, close, status, error, connect, eventSource } = useEventSource(
      "http://localhost:2222/cash"
    );

    watch(data, (data, _) => {
      amount.value = Number(data);
    });

    // 使用 globalState
    const state = useGlobalState();

    return {
      connect,
      amount: computed(() => amount.value),
      close,
      status,
      state,
    };
  },
};
</script>
