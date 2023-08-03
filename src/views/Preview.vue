<template>
  <div class="preview">
    <div class="preview__container">
      <h2 class="preview__container__header">Персональные данные</h2>
      <h2 class="preview__container__name" v-if="store.saved">
        {{ store.resultMainName }}, {{ store.resultMainAge }} лет
      </h2>
      <h2 class="preview__container__name" v-else>Нет</h2>
      <h2 class="preview__container__header">Дети</h2>
      <div v-if="store.saved">
        <div class="childe" v-for="childe in store.resultChildren" :key="childe">
          <p class="childe__label">{{ childe.name }}, {{ childe.age }} лет</p>
        </div>
      </div>
      <h2 class="preview__container__name" v-else>Нет</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePersonalitesStore } from '../stores/personalites'
const store = usePersonalitesStore()
</script>

<style scoped lang="scss">
.preview {
  display: flex;
  justify-content: center;
  padding: 30px 0;
  &__container {
    width: 45%;
    &__header {
      font-weight: 500;
      padding-bottom: 20px;
    }
    &__name {
      font-weight: 800;
      margin-bottom: 60px;
    }
  }
  .childe {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: var(--color-input-border);
    width: 30%;
    &__label {
      font-weight: 800;
    }
  }
}
</style>
