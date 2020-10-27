<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <BaseModal />

  <router-link to="/recognition" v-slot="{ navigate }">
    <BaseButton @click="navigate">車牌辨識</BaseButton>
  </router-link>

  <BaseButton @click="fetchUserData">取資料</BaseButton>

  <p>{{ state }}</p>

  <div>
    <BaseKeyboard />
  </div>

  <router-link to="/payment" v-slot="{ navigate }">
    <BaseButton @click="navigate">現金支付</BaseButton>
  </router-link>

  <div class="flex flex-wrap border-dashed border-4 mx-48">
    <div
      class="border-dashed border-2 border-black h-40 w-1/4 flex-grow justify-center flex"
      v-for="(img, i) in images"
      :key="i"
    >
      <img :src="img" class="w-full img" alt="" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import { computed, reactive, ref } from "vue";
import { useState } from "../store.js";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const images = ref([
      "images/ecc.png",
      "images/icash.png",
      "images/ecc.png",
      "images/icash.png",
      "images/ecc.png",
      "images/icash.png",
      "images/ecc.png",
      "images/icash.png",
      "images/icash.png",
      "images/icash.png",
      "images/icash.png",
    ]);
    return { ...useState(), images };
  },
};
</script>

<style scoped>
.img {
  /* object-fit: cover; */
  /* object-position: center; */
  /* background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
}
</style>
