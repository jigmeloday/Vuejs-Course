function randomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            mosterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessage: [],
        }
    },
    watch: {
       playerHealth(value) {
        if(!value && !this.mosterHealth) {
            this.winner = 'draw'
        }
        else if (!value) {
            this.winner = 'moster'
        }
       },
       mosterHealth(value) {
        if(!value && !this.playerHealth) {
            this.winner = 'draw'
        }
        else if (!value) {
            this.winner = 'player'
        }
       }
    },
    computed: {
        mosterHealthBar() {
            if(this.mosterHealth <= 0) {
                return '0%'
            }
            return this.mosterHealth + '%';
        },
        playerHealthBar() {
            if(this.playerHealth <= 0) {
                return '0%'
            }
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
            const health = randomValue(5, 12);
            this.mosterHealth -= health
            this.attackPlayer();
            this.addLogMessage('Player', 'attack', health )
        },
        specialAttack() {
            this.currentRound ++;
            const specail = randomValue(12, 20);
            this.mosterHealth -= specail;
            this.addLogMessage('Player', 'attack', specail )

        },
        attackPlayer() {
            const health = randomValue(8, 15)
            this.playerHealth -= health;
            this.addLogMessage('Monster', 'attack', health )
          
        },
        surrender() {
            this.playerHealth = 0;
            this.winner = 'moster';
            this.logMessage = []

        },
        reset() {
            this.mosterHealth = 100,
            this.playerHealth = 100,
            this.winner=null;
            this.currentRound = 0;
            this.logMessage = [];
        },
        healPlayer() {
            this.currentRound ++;
            const healedValue = randomValue(8,20);
            if(healedValue+this.playerHealth <=100) {
                this.playerHealth += healedValue;
                this.addLogMessage('Player', 'Healed', healedValue )
            } else {
                this.playerHealth = 100;
            }
            this.attackPlayer();
        },
        addLogMessage(who, what, value) {
            this.logMessage.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            })
        }
    }
})

app.mount('#game')