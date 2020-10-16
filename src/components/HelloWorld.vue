<template>
  <h1>{{ msg }}</h1>
  <BaseButton @click="count++">count is: {{ count }}</BaseButton>

  <router-link to="/about">About</router-link>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>
