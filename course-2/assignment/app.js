const app = Vue.createApp({
    data() {
        return{
            name: 'Jigme Lodey',
            inputValue: 'Test',
            age: 121,
            imageLink: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
        }
    },
    methods: {
        random() {
            return Math.random();
        }
    }
})

app.mount('#assignment')