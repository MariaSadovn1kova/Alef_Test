<template>
  <div class="navbar">
    <img class="navbar__logo" src="../assets/icons/logo.png" />
    <div class="navbar__link-container">
      <RouterLink class="navbar__link-container__link" to="/">Форма</RouterLink>
      <RouterLink class="navbar__link-container__link" to="/preview">Превью</RouterLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.navbar {
  background-color: var(--color-background);
  height: 76px;
  box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);

  &__logo {
    position: absolute;
    height: 76px;
    margin: 0px 51px;
  }

  &__link-container {
    display: flex;
    justify-content: center;
    height: 100%;

    &__link {
      padding: 25px;
      font-size: 15px;
      text-decoration: none;
      color: var(--color-font-ligth);
      &:hover {
        color: var(--color-font-default);
      }
    }
  }
}
</style>
