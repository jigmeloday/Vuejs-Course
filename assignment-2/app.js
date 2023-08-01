const app = Vue.createApp({
    data() {
        return{
            courseGoalA: 'Hello Vue',
            courseGoalB: 'Hello Vue',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        randomCourse() {
            const random = Math.random();
            if(random % 2 === 0) return this.courseGoalA;
            return this.courseGoalB;
        }
    }
})

app.mount('#user-goal');
