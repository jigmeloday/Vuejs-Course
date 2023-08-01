const app = Vue.createApp({
    data() {
        return{
            counter: 0,
            value: 0
        }
    },
    methods: {
        add() {
            this.counter++
        },
        sub() {
            this.counter--
        }
    }
})
app.mount('#events')