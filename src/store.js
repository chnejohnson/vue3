import { reactive, readonly, inject } from "vue";

export const state = Symbol("state");

export const useState = () => inject(state);

export const createStore = () => {
  const state = reactive({
    age: 0,
    name: ""
  });

  const fetchUserData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        state.age = 18;
        state.name = "John";
        resolve();
      }, 2000);
    });
  };

  const changeName = name => {
    state.name = name;
  };

  return {
    changeName,
    fetchUserData,
    state: readonly(state)
  };
};
