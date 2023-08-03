<template>
  <li>
    <h1>{{friend.name}}</h1>
    <button @click='toggleShow'>{{ `${!showDetail? 'Show' : 'Hide'} Details` }}</button>
    <button @click='toggleFav'>{{ `${fav? 'Make' : 'Remove'} Favorite` }}</button>
    <button @click='toggleFollow'>{{!friend.follow ? 'Follow' : 'Unfollow' }}</button>
    <div style="margin-top: 20px;">
        <button @click="$emit('delete-friend', friend.id)">Delete</button>
    </div>
    <ul v-if="showDetail">
        <li>
            <strong>
                Phone:
            </strong>
            {{friend.phone}}
        </li>
        <li>
            <strong>
                Phone:
            </strong>
            {{friend.email}}
        </li>
    </ul>
  </li>
</template>

<script>
    export default {
        props: ['friend'],
        emits: [ 'delete-friend' ],
        data() {
            return{
                showDetail: false,
                fav: this.friend.isFavorite
            }
        },
        methods: {
            toggleShow() {
                this.showDetail = !this.showDetail
            },
            toggleFav() {
                this.fav = !this.fav
            },
            toggleFollow() {
                this.$emit('follow-user', this.friend.id)
            }
        }
    };
</script>