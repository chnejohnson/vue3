import { createApp } from "vue";
import App from "./App.vue";
import router from "./views/router";
import "./css/index.css";

import { state, createStore } from "./store";

const app = createApp(App);

import BaseModal from "./components/base/BaseModal.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseInput from "./components/base/BaseInput.vue";
import BaseKeyboard from "./components/base/BaseKeyboard.vue";

app.use(router);

app.component("BaseModal", BaseModal);
app.component("BaseButton", BaseButton);
app.component("BaseInput", BaseInput);
app.component("BaseKeyboard", BaseKeyboard);

app.provide(state, createStore()).mount("#app");
