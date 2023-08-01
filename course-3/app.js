const app = Vue.createApp({
    data() {
        return{
            counter: 0,
            value: 0,
            name: ''
        }
    },
    methods: {
        setName(value) {
            this.name = value.target.value
        },
        add(number) {
            this.counter += number
        },
        sub(number) {
            this.counter -= number
        }
    }
})
app.mount('#events')