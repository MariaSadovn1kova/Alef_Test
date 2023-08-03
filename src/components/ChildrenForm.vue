<template>
  <div class="children-form" action="">
    <div class="children-form__header">
      <h2 class="children-form__header__label">Дети (макс. 5)</h2>
      <button
        class="children-form__button-add"
        @click="store.addChilde()"
        v-if="store.children.length < 5"
      >
        <img src="../assets/icons/plus.svg" />
        <p>Добавить ребенка</p>
      </button>
    </div>
    <div class="children-row" v-for="child in store.children" :key="child">
      <div class="input">
        <input class="input__field" type="text" v-model="child.name" />
        <p class="input__label">Имя</p>
      </div>
      <div class="input">
        <input class="input__field" type="text" v-model="child.age" />
        <p class="input__label">Возраст</p>
      </div>
      <button class="children-row__button" @click="store.deleteChilde(child)">Удалить</button>
    </div>
    <button class="button-save" @click="store.save()">Сохранить</button>
  </div>
</template>

<script setup lang="ts">
import { usePersonalitesStore } from '../stores/personalites'
const store = usePersonalitesStore()
</script>

<style scoped lang="scss">
.children-form {
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
  .children-row {
    display: flex;
    justify-content: space-between;
    &__button {
      height: 56px;
      border: none;
      background-color: var(--color-background);
      color: var(--color-button);
      &:hover {
        cursor: pointer;
      }
    }
  }
  .input {
    margin-bottom: 10px;
    border: 1px solid var(--color-input-border);
    height: 56px;
    width: 45%;

    border-radius: 4px;
    &__label {
      padding: 6px 16px;
      color: var(--color-font-ligth);
    }
    &__field {
      position: absolute;
      outline: none;
      padding: 30px 16px 16px 16px;
      border: none;
      background: transparent;
      width: 20%;
    }
  }
  .button-save {
    margin-top: 20px;
    border-radius: 100px;
    padding: 10px 20px;
    background-color: var(--color-button);
    color: white;
    border: none;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);
    }
  }
}
</style>
