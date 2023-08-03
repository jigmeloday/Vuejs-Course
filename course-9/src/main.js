import { createApp } from 'vue';
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import addFriend from './components/addFriend.vue';

const app = createApp(App);
app.component('friend-contact', FriendContact);
app.component('add-friend', addFriend)
app.mount('#app');
