import Vue from 'vue';
import VueRouter from 'vue-router';
import 'components/global.scss';

// Route components
import AccountDashboard from './views/AccountDashboard.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: AccountDashboard}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  el: '#app',
  template: '<router-view></router-view>'
});