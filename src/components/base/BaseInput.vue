<template>
  <label>{{ label }}</label>
  <input
    class="shadow appearance-none border border-red-500 rounded w-42 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    v-model="localValue"
    type="text"
    v-bind="$attrs"
  />
</template>

<script>
import { computed } from "vue";

export default {
  name: "BaseInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const localValue = computed({
      get: () => props.modelValue,
      set: (value) => context.emit("update:modelValue", value),
    });
    return {
      localValue,
    };
  },
};
</script>
