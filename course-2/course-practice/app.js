const app = Vue.createApp({
    data() {
        return{
            courseGoalA: 'Hello Vue',
            courseGoalB: '<h1>Hello React</h1>',
            vueLink: 'https://vuejs.org'
        }
    },
    computed: {
        randomCourse() {
            const random = Math.random();
            if(random < 0.5) return this.courseGoalA;
            return this.courseGoalB;
        }
    },
    methods: {
    
    }
})

app.mount('#user-goal');
