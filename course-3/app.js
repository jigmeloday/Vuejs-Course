const app = Vue.createApp({
    data() {
        return{
            counter: 0,
            value: 0
        }
    },
    methods: {
        add(number) {
            this.counter += number
        },
        sub(number) {
            this.counter -= number
        }
    }
})
app.mount('#events')