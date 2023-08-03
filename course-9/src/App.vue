<template>
    <section>
        <h2>My Friends</h2>
        <add-friend @new-friend='addFriend'></add-friend>
        <ul>
           <friend-contact v-for="friend in friends" :key="friend.id" :friend='friend' @follow-user='followUserStatus' @delete-friend='deleteFriend'></friend-contact>
        </ul>
    </section>
</template>

<script>
export default{
    data() {
        return{
            friends: [
                {
                    id: '1',
                    name: 'pema',
                    phone: '12121212',
                    email: 'pema@gmail.com',
                    isFavorite: true,
                    follow: false,

                },
                {
                    id: '2',
                    name: 'sema',
                    phone: '12121212',
                    email: 'sema@gmail.com',
                    isFavorite: false,
                    follow: false
                },
                {
                    id: '3',
                    name: 'dema',
                    phone: '12121212',
                    email: 'dema@gmail.com',
                    isFavorite: true,
                    follow: false
                }
            ]
        }
    }, 
    methods: {
        followUserStatus(id) {
           const changeData = this.friends.find(friend => friend.id === id);
           changeData.follow = !changeData.follow
        },
        addFriend(name, phone, email) {
            const newFriend = {
                id: Math.random(),
                name,
                phone,
                email,
                isFavorite: true,
                follow: false
            }
            this.friends.unshift(newFriend)
        },
        deleteFriend(id) {
            this.friends = this.friends.filter( friend => friend.id !== id )
        }
    }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
    font: inherit;
    padding: 0.15rem
}

#app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
}
#app form div{
    margin: 1rem 0;
}

</style>
