const app = Vue.createApp({
    data() {
        return{
            inputValue: 'hello',
            inputTwo: '',
            onConfirm: ''
        }
    },
    methods: {
        showAlert() {
            alert('hello its working');
        },
        setInputTwo(val) {
            this.inputTwo = val.target.value;
            this.onConfirm = this.inputTwo
        },

        setInput(val) {
            this.inputValue = val.target.value;
        }
    }
})

app.mount('#assignment')