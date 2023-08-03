<template>
  <div class="footer">
    <p class="footer__text">all rights reserved</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer {
  height: 76px;
  margin-top: auto;
  background-color: var(--color-background-darker);
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;

  &__text {
    display: flex;
    justify-content: center;
    padding: 25px 0px;
  }
}
</style>
