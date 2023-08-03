<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goal')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goal')">Manage Goals</button>
    <keep-alive>
      <component :is="selectComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ActiveGoal from './components/ActiveGoal.vue';
import ManageGoal from './components/ManageGoal.vue';
export default {
  components: {
    TheHeader,
    ActiveGoal,
    ManageGoal,
  },
  data() {
    return {
      selectComponent: 'active-goal',

      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(comp) {
      this.selectComponent = comp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
