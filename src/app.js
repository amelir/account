import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// Route components
import Account from './views/Account.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Account, meta: { title: 'My Account' }}
];

const router = new VueRouter({
  routes,
  base: document.querySelector('#root').getAttribute('data-path') || '/',
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title ? `Amelir - ${to.meta.title}` : 'Amelir';
  next();
});

new Vue({
  router,
  el: '#root',
  render: h => h(App)
});