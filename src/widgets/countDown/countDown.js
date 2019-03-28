import countNum from './countNum.vue';
import countDown from './countDown.vue';

export default function install (Vue) {
    Vue.component('countNum', countNum);
    Vue.component('countDown', countDown);
};
