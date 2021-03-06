import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';
import Loading from 'vue-loading-overlay';

import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import App from './App.vue';
import router from './router';
import './bus';
import Currencyfilter from './filters/currency';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.use(VeeValidate, {
  events: 'input|change|blur',
});
VeeValidate.Validator.localize('zh_TW', zhTWValidate);

Vue.component('loading', Loading);

Vue.filter('currency', Currencyfilter);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
