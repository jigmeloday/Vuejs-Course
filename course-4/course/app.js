const app = Vue.createApp({
    data() {
        return{
            isActive: '1'
        }
    },
    methods: {
        setActive(id) {
           this.isActive = id
        }
    }
})

app.mount('#styling')