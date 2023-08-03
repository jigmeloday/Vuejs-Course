<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  margin: 0;
  position: absolute;
  top: 20vh;
  left: 30%;
  width: 40%;
  background: white;
  padding: 1rem;
  box-shadow: 0 2px 8px rbga(0, 0, 0, 0.26);
}
</style>
