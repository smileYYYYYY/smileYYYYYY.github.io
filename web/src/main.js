import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
 //swriper引入
 //import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
//import 'swiper/dist/css/swiper.css'
//Vue.use(VueAwesomeSwiper, /* { default global options } */)

import '../src/assets/css/public.css'
import '../src/assets/css/reset.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
