/*
 * @Author: zhangzhenyang 
 * @Date: 2018-12-01 14:30:45 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-01-dd 17:07:00
 */
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import global from './style/global.scss'
import rootStore from './store/store';
import widgets from './widgets/widgets.js';
import widgetsLocal from './widgets-local/widgets.js';
import util from './script/util';
import filter from './script/filter';


Vue.use(filter);
Vue.prototype.$util = util;
Vue.use(widgets);
// Vue.use(clickoutside);
Vue.use(widgetsLocal);
Vue.use(Vuex);

const store = new Vuex.Store(rootStore);
window.vue = Vue;
window.project = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
console.log('main 2019-04-29 11:36:00');
