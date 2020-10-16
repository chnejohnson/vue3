<template>
  <BaseButton @click="showModal = true">Open</BaseButton>

  <VueFinalModal
    v-model="showModal"
    classes="modal-container"
    content-class="modal-content"
  >
    <span class="modal__title">Hello, vue-final-modal</span>
    <div class="modal__content">
      <p>
        Vue Final Modal is a renderless, stackable, detachable and lightweight
        modal component.
      </p>
    </div>
  </VueFinalModal>
</template>

<script>
import { VueFinalModal } from "vue-final-modal";
import { computed, ref } from "vue";

export default {
  components: {
    VueFinalModal
  },
  setup() {
    const showModal = ref(false);

    return {
      showModal
    };
  }
};
</script>

<style scoped>
::v-deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep(.modal-content) {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}

.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
