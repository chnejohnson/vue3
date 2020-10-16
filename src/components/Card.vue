<template>
  <p>{{ pos }}</p>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Card } from "../interface/Card";

export default {
  name: "Card",
  props: {
    card: {
      type: Object as PropType<Card>
    }
  },
  setup(props) {
    const pos = props.card.position;

    return { pos };
  }
};
</script>

<style></style>
