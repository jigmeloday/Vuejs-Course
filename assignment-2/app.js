const app = Vue.createApp({
    data() {
        return{
            courseGoal: 'Hello Vue',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        randomCourse() {
            const random = Math.random();
            if(random % 2 === 0) return 'Happy Vue'
            return 'Happy React'
        }
    }
})

app.mount('#user-goal');
