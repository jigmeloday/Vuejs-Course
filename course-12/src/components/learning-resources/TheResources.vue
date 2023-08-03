<template>
  <div>
    <base-card>
      <base-button @click="toggleTab('stored-resource')"
        >Stored Resource</base-button
      >
      <base-button @click="toggleTab('add-resource')">Add Resource</base-button>
    </base-card>
    <store-resources></store-resources>
  </div>
</template>

<script>
import StoreResources from './StoreResources.vue';
export default {
  components: { StoreResources },
  data() {
    return {
      currentTab: 'stored-resource',
    };
  },
  methods: {
    toggleTab(tabName) {
      this.currentTab = tabName;
    },
  },
};
</script>
