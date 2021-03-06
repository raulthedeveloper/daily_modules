import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes';
import firebase from 'firebase'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
})

export const bus = new Vue();

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
