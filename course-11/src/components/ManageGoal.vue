<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoals">Set Goal</button>
    <Teleport to="body">
      <error-alert v-if="inputInvalid">
        <h2>Empty Input</h2>
        <p>Please Enter at least a few character</p>
        <button @click="confirmError">Ok</button>
      </error-alert>
    </Teleport>
  </div>
</template>
<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputInvalid: false,
    };
  },
  methods: {
    setGoals() {
      const enterValue = this.$refs.goal.value;
      if (enterValue === '') {
        this.inputInvalid = true;
      }
    },
    confirmError() {
      this.inputInvalid = false;
    },
  },
};
</script>
