import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/UI/BaseBadge.vue';
import BadgeCard from './components/UI/BadgeCard.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('badge-card', BadgeCard);


app.mount('#app');
