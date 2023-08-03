<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" refs="goal" />
    <button @click="setGoals">Set Goal</button>
  </div>
</template>
<script>
export default {
  methods: {
    setGoals() {
      const enterValue = this.$refs.goal.value;
      if (enterValue === '') {
        alert('Empty Input');
      }
    },
  },
};
</script>
