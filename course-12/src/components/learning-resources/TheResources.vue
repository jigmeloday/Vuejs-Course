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
    <keep-alive>
      <component :is="currentTab"></component>
    </keep-alive>
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
      storedResource: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js document',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResource,
      addResource: this.addNewResource,
    };
  },
  methods: {
    toggleTab(tabName) {
      this.currentTab = tabName;
    },

    addNewResource(title, description, url) {
      const newResource = {
        id: `${new Date().toISOString()}+${Math.random()}`,
        title,
        description,
        url,
      };
      this.storedResource.unshift(newResource);
      this.currentTab = 'store-resources';
    },
  },
};
</script>
