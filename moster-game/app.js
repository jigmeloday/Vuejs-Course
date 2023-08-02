function randomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            mosterHealth: 100,
            playerHealth: 100

        }
    },
    computed: {
        mosterHealthBar() {
            return this.mosterHealth + '%';
        },
        playerHealthBar() {
            return this.playerHealth + '%';
        }
    },
    methods: {
        attackMoster(type) {
            const attackValue = randomValue(5, 12)
            this.mosterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            this.playerHealth -= randomValue(8, 15)
        },

        healPlayer() {
            this.playerHealth += randomValue(2,10)
        }
    }
})

app.mount('#game')