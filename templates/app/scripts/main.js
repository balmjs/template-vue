import Vue from 'vue';
import App from './views/layouts/app';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
