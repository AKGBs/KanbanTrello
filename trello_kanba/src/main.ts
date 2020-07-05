import Vue from 'vue';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';

import VueCookies from 'vue-cookies';
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueCookies);

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app');
