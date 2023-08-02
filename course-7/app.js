const app = Vue.createApp({
    data() {
        return{
            friendList: [
                {
                    name:'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    name:'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
    methods: {
        toggleFuc() {

        }
    }

});
app.component('friend-contact', {
    template: `<li v-for="friend in friendList">
    <h2>{{friend.name}}</h2>
    <button @click="toggleFuc()">Show Details</button>
    <ul v-if="showDetails">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>`,
    data() {
        return { 
            friendList: [
                {
                    name:'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                }
            ],
            showDetails: false
         }
    },
    methods: {
        toggleFuc() {
            this.showDetails = !this.showDetails
        }
    }
})
app.mount('#app')