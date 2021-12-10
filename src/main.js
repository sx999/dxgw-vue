import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import './api/mock.api'; // 接口API
import './assets/icons/iconfont.css'; //icon图标
import './assets/css/global.css'  //全局css
//时间格式组件
import Moment from 'moment'
Vue.prototype.moment = Moment

import axios from 'axios'
Vue.prototype.axios = axios;    //全局注册，

// import VueLazyload from 'vue-lazyload';
// Vue.use(VueLazyload, {
//   error: 'assets/images/error.jpg',
//   loading: 'assets/images/loading.gif'
// });

//字体
import './assets/css/fontCss.css';

import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)

//页面跳转显示在顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
