<template>
  <img alt="Vue logo" src="../assets/logo.png" />
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
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import { computed, ref } from "vue";
import { useState } from "../store.js";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    return { ...useState() };
  },
};
</script>
