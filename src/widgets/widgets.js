/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:38:30 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-12-dd 14:24:44
 */
require('./wireless.css');
import filter from './filter/filter';
import aspect from './aspect/aspect';
import emptyLayout from './emptyLayout/emptyLayout';
import codeBlock from './codeBLock/codeBlock';
import actionWrap from './actionWrap/actionWrap';
import focusImg from './focusImg/focusImg';
import waterfall from './waterfall/waterfall';
import swipe from './swipe/swipe';
import countDown from './countDown/countDown';
import oneRow from './oneRow/oneRow';
import twoRow from './twoRow/twoRow';
import threeRow from './threeRow/threeRow';
import oneRowHorizontal from './oneRowHorizontal/oneRowHorizontal';
import groupGoods from './groupGoods/groupGoods';
import poster from './poster/poster';
import coupon from './coupon/coupon';

import tabTemp from './tabTemp/tabTemp';
import tab from './tab/tab';
import videoBlock from './videoBlock/videoBlock';
import marqueeBlockWrap from './marqueeBlockWrap/marqueeBlockWrap';
import marqueeBlock from './marqueeBlock/marqueeBlock';

import center from './center/center'
import hotItem from './hotItem/hotItem'
import promotionMeal from './promotionMeal/promotionMeal'
import widgetHeader from './widgetHeader/widgetHeader';
import aLink from './aLink/aLink';
import goodsLink from './goodsLink/goodsLink';
import favorite from './favorite/favorite';
import pageBottom from './pageBottom/pageBottom';


import wireless from './wireless/wireless';

console.log('widdget 2019-01-15 17:19:50');

const options = {
    filter,
    actionWrap,
    waterfall,
    aspect,
    codeBlock,
    focusImg,
    swipe,
    countDown,
    oneRow,
    twoRow,
    threeRow,
    oneRowHorizontal,
    groupGoods,
    poster,
    coupon,
    tabTemp,
    tab,
    videoBlock,
    marqueeBlockWrap,
    marqueeBlock,
    center,
    hotItem,
    promotionMeal,
    widgetHeader,
    aLink,
    goodsLink,
    emptyLayout,

    wireless,
    favorite,
    pageBottom,
};
options.install = (Vue) => {
    for (let component in options) {
        const componentInstaller = options[component];
        if (componentInstaller && component !== 'install') {
            Vue.use(componentInstaller);
        }
    }
};
if(window.Vue){
	for (let component in options) {
		const componentInstaller = options[component];
		if (componentInstaller && component !== 'install') {
			window.Vue.use(componentInstaller);
		}
	}
}
export default options;
