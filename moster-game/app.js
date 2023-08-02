function randomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            mosterHealth: 100,
            playerHealth: 100,
            currentRound: 0
        }
    },
    computed: {
        mosterHealthBar() {
            return this.mosterHealth + '%';
        },
        playerHealthBar() {
            return this.playerHealth + '%';
        },
        eligibleForSpecailAttack() {
            if (this.currentRound % 3 !== 0) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        attackMoster(type) {
            this.currentRound ++;
            const attackValue = randomValue(5, 12);
            this.mosterHealth -= attackValue;
            this.attackPlayer();
        },
        specialAttack() {
            this.currentRound ++;
            this.mosterHealth -= randomValue(12, 20);
        },
        attackPlayer() {
            this.playerHealth -= randomValue(8, 15);
        },
        surrender() {
            this.playerHealth -= 100;
        },
        healPlayer() {
            this.playerHealth += randomValue(2,10);
        }
    }
})

app.mount('#game')