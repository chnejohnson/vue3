<template>
  <ul>
    <AsyncCard v-for="card in cards" :key="card.id" :card="card" />
  </ul>
</template>

<script lang="ts">
import useCards from "../modules/useCards";
import Loading from "./Loading.vue";
import { defineAsyncComponent, onMounted } from "vue";

const AsyncCard = defineAsyncComponent({
  loader: () => import("./Card.vue"),

  delay: 200,
  suspensible: true
});

export default {
  name: "Cards",
  components: {
    AsyncCard
  },

  async setup() {
    const { cards, getCards } = useCards();

    await getCards("warning");

    return { cards };
  }
};
</script>
