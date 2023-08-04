<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="setActive('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'avarage' }">
      <button type="button" @click="setActive('avarage')">Avarage</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="setActive('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      activeButton: this.modelValue,
    };
  },
  methods: {
    setActive(name) {
      this.$emit('update:modelValue', name);
    },
  },
};
</script>

<style scoped>
.active {
  border: 1px solid purple;
}
.active button {
  color: green;
  border: 1px solid purple;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-content: center;
}
button {
  font: inherit;
  background: transparent;
  cursor: pointer;
  border: none;
}
</style>
