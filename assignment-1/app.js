Vue.createApp({
    data() {
        return {
            goals: [],
            inputValue: ''
        }
    },
    methods: {
        addList() {
            this.goals.push(this.inputValue);
            console.log(this.goals)
        }
    }
}).mount('#app')