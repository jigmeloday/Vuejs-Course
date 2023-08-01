const app = Vue.createApp({
    data() {
        return{
            courseGoalA: 'Hello Vue',
            courseGoalB: '<h1>Hello React</h1>',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        randomCourse() {
            const random = Math.random();
            if(random < 0.5) return this.courseGoalA;
            return this.courseGoalB;
        }
    }
})

app.mount('#user-goal');
