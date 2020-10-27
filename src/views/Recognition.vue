<template>
  <h3>請輸入車牌</h3>
  <input type="text" v-model="license" />
  <BaseButton @click="getCar(license)">確定</BaseButton>

  <ul>
    <li>進場時間 {{ car?.inTime }}</li>
    <li>出場時間 {{ car?.outTime }}</li>
    <li>應繳金額 {{ car?.cost }}</li>
    <li>車牌 {{ car?.license }}</li>
  </ul>

  <router-link to="/payment" v-slot="{ navigate }">
    <BaseButton @click="navigate">現金付款</BaseButton>
  </router-link>

  <BaseInput v-model="name"></BaseInput>

  <BaseButton @click="changeName(name)">改名子</BaseButton>
  <p>{{ state }}</p>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import useCar from "../modules/useCar";
import { useState } from "../store";

export default {
  setup() {
    const { car, getCar } = useCar();
    const license = ref<string>("EEE-8888");
    const name = ref<string>("");

    onMounted(async () => {
      // 為什麼 try...catch...在這裡沒用？
      // 為什麼 onerror 沒有在這裡發動？
      try {
        await getCar(license.value);
      } catch (e) {
        throw new Error(e);
      }
    });

    const { state, changeName } = useState();

    return { car, license, getCar, state, name, changeName };
  },
};
</script>
