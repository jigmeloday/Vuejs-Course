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
        submit() {
            alert('good job')
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