<template>
    <section>
        <form @submit.prevent='addNewFriend()'>
            <div>
                <label>Name</label>
                <input type="text" v-model="name"/>
            </div>
            <div>
                <label>Phone</label>
                <input type="tel" v-model="phone"/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" v-model="email"/>
            </div>
            <div>
                <button>Add friend</button>
            </div>
        </form>
    </section>
</template>
<script>
export default {
    emits: ['new-friend'],
    data() {
        return{
            name: '',
            email: '',
            phone: ''
        }
    },
    methods: {
        addNewFriend() {
            this.$emit('new-friend', this.name, this.email, this.phone)
        }
    }
}
</script>

<style>

</style>