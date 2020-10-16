<template>
  <p>About</p>

  <router-link to="/">Back Home</router-link>

  <div v-if="error">{{ error }}</div>

  <Suspense v-else>
    <template #default>
      <Cards />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<script>
import Cards from "../components/Cards.vue";
import Loading from "../components/Loading.vue";
import { ref, onErrorCaptured } from "vue";

export default {
  components: {
    Cards,
    Loading,
  },
  setup() {
    const error = ref(null);

    onErrorCaptured((e) => {
      error.value = e;
      return true;
    });
    return { error };
  },
};
</script>
