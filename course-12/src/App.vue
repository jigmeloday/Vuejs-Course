<template>
  <ul>
    <stored-resources :resources="storedResource"></stored-resources>
  </ul>
</template>

<script>
import StoredResources from './components/learning-resources/StoreResources.vue';
export default {
  components: { StoredResources },
  data() {
    return {
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
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
