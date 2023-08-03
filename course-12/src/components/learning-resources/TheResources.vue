<template>
  <div>
    <base-card>
      <base-button @click="toggleTab('store-resources')"
        >Stored Resource</base-button
      >
      <base-button @click="toggleTab('add-resource')">Add Resource</base-button>
    </base-card>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import StoreResources from './StoreResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: { StoreResources, AddResource },
  data() {
    return {
      currentTab: 'store-resources',
    };
  },
  methods: {
    toggleTab(tabName) {
      this.currentTab = tabName;
    },
  },
};
</script>
