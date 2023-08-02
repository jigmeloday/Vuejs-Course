function randomValue(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            mosterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null
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
            this.mosterHealth -= randomValue(5, 12);

            this.attackPlayer();
            
        },
        specialAttack() {
            this.currentRound ++;
            const specail = randomValue(12, 20);
            this.mosterHealth -= specail;
            if(this.mosterHealth - specail >=0 ){
               
               } else{
                this.mosterHealth =0;
             }
        },
        attackPlayer() {
            const health = randomValue(8, 15);

            if(this.playerHealth - health >= 0 ){
                this.playerHealth -= health;
               } else{
                this.playerHealth =0;
               }
        },
        surrender() {
            this.playerHealth = 0;
        },
        healPlayer() {
            this.currentRound ++;
            this.attackPlayer();
            const healedValue = randomValue(8,20);
            if(healedValue+this.playerHealth <=100) {
                this.playerHealth += healedValue;
            } else {
                this.playerHealth = 100;
            }
            
        }
    }
})

app.mount('#game')