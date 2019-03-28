require('vue-swipe/dist/vue-swipe.css');

import { Swipe, SwipeItem } from 'vue-swipe';
import swipe from './swipe.vue';
// import focusImg from './focusImg.vue';
export default function install (Vue) {
    // Vue.component('focusImg', focusImg);
    Vue.component('swipeGroup', Swipe);
    Vue.component('swipeItem', SwipeItem);
    Vue.component('swipe', swipe);
};
