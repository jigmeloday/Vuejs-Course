<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <li v-for="friend in friends" :key='friend.id'>{{friend}}</li>
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
                    email: 'pema@gmail.com'
                },
                {
                    id: '2',
                    name: 'sema',
                    phone: '12121212',
                    email: 'sema@gmail.com'
                },
                {
                    id: '3',
                    name: 'dema',
                    phone: '12121212',
                    email: 'dema@gmail.com'
                }
            ]
        }
    }
}
</script>
