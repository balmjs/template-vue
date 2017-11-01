import Vue from 'vue';
import app from './views/layouts/app';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: { app },
  template: '<app/>'
});
