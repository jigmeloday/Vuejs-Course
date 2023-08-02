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
        data() {
            return{
                showDetail: false,
                friend:  {
                    id: '1',
                    name: 'pema',
                    phone: '12121212',
                    email: 'pema@gmail.com'
                },
            }
        },
        methods: {
            toggleShow() {
                this.showDetail = !this.showDetail
            }
        }
    };
</script>