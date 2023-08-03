<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ['type', 'mode'],
};
</script>
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #9d78b7;
  border: 1px solid #3a0061;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: 1px solid #3a0061;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
