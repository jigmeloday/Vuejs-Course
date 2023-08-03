<template>
  <div>
    <base-card>
      <base-button
        :mode="storedResourcesStatus"
        @click="toggleTab('store-resources')"
        >Stored Resource</base-button
      >
      <base-button :mode="AddResourceStatus" @click="toggleTab('add-resource')"
        >Add Resource</base-button
      >
    </base-card>
    <component :is="currentTab"></component>
  </div>
</template>

<script>
import StoreResources from './StoreResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: { StoreResources, AddResource },
  computed: {
    storedResourcesStatus() {
      return this.currentTab === 'store-resources' ? null : 'flat';
    },
    AddResourceStatus() {
      return this.currentTab === 'add-resource' ? null : 'flat';
    },
  },
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
