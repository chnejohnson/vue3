<template>
  <BaseInput v-model="input" />
  <div class="simple-keyboard"></div>
</template>

<script>
import { onMounted, ref, watch, computed } from "vue";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

export default {
  name: "SimpleKeyboard",

  setup(props, ctx) {
    const keyboard = ref(null);
    const input = ref("");

    onMounted(() => {
      keyboard.value = new Keyboard.default({
        onChange,
        onKeyPress,
        layout: {
          default: [
            "1 2 3 4 5 6 7 8 9 0 {bksp}",
            "q w e r t y u i o p",
            "a s d f g h j k l",
            "z x c v b n m",
          ],
          shift: [
            "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
            "{tab} Q W E R T Y U I O P { } |",
            '{lock} A S D F G H J K L : " {enter}',
            "{shift} Z X C V B N M < > ? {shift}",
            ".com @ {space}",
          ],
        },
      });
    });

    function onChange(keyPress) {
      input.value = keyPress;
      // console.log("Input changed", keyPress);
    }

    function onKeyPress(button) {
      // console.log("Button pressed", button);
    }

    return {
      input: computed(() => input.value),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>