<template>
  <li>
    <h1>{{friend.name}}</h1>
    <button @click='toggleShow'>{{ `${!showDetail? 'Show' : 'Hide'} Details` }}</button>
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
       
        data() {
            return{
                showDetail: false,
            }
        },
        methods: {
            toggleShow() {
                this.showDetail = !this.showDetail
            }
        }
    };
</script>