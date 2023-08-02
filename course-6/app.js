const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$ref.userText;
    },
  },
  beforeCreate() {
    console.log('before create')
  },
  created() {
    console.log('Created')
  },
  beforeMount() {
    console.log('before mount')
  },
  mounted() {
    console.log('before mount')
  },
  beforeUpdate() {
    console.log('before ')
  },
  updated() {
    console.log('before ')
  },
  beforeUnmount() {
    console.log('before Unmount')
  },
  unmounted() {
    console.log('unMount')
  }
});

app.mount('#app');
