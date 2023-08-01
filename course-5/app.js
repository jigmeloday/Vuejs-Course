const app = Vue.createApp({
  data() {
    return {
      item: '',
       goals: [] 
      };
  },
  methods: {
    addGoals() {
      if(this.item) {
        this.goals.push(this.item)
      }
    }
  }
});

app.mount('#user-goals');
