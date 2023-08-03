<template>
  <div class="container">
    <MainForm />
  </div>
  <div class="container">
    <ChildrenForm />
  </div>
</template>

<script setup lang="ts">
import CustomInput from '../components/CustomInput.vue'
import ChildrenForm from '../components/ChildrenForm.vue'
import MainForm from '../components/MainForm.vue'
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  padding: 30px 0;

  .form {
    min-height: 200px;
    width: 45%;

    &__header {
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;

      &__label {
        font-weight: 500;
      }
    }
    &__button-add {
      border-radius: 100px;
      padding: 10px 20px;
      background-color: var(--vt-c-white);
      border: 1px solid var(--color-button);
      color: var(--color-button);
      font-family: Montserrat;
      display: flex;
      p {
        padding-top: 4px;
        padding-left: 10px;
      }
      &:hover {
        cursor: pointer;
        box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);
      }
    }
  }
}
</style>
