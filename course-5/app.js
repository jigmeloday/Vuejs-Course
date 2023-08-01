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
    },
    remove(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
