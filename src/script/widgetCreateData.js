import util from '../script/util';
import countDownData from './widgetData/countDown';
import tabData from './widgetData/tab';
import swipeData from './widgetData/swipe';
import promotionMealData from './widgetData/promotionMeal';
import hotItemData from './widgetData/hotItem';
import marqueeBlockData from './widgetData/marqueeBlock';
import waterfallData from './widgetData/waterfall';
import oneRowHorizontalData from './widgetData/oneRowHorizontal';
import groupGoodsData from './widgetData/groupGoods';
import couponData from './widgetData/coupon';
import oneRowData from './widgetData/oneRow';
import twoRowData from './widgetData/twoRow';
import threeRowData from './widgetData/threeRow';
import pageBottomData from './widgetData/pageBottom';
import favoriteData from './widgetData/favorite';

function getName(type) {
	let name = type + new util.getRequestID();
	return name;
}
const thumbnail = 'https://img.wonbao.net/wonbao-wireless/bottom/bottom07.png';
const data = {
	// 倒时计==================================================================================================================================
	countDown() {
		let name = getName('countDown');
		return {
			name,
			"type": "countDown",
			"p": false,
			"image": thumbnail,
			"id": null,
			...countDownData(name)
		}
	},
	// 选项卡
	tab() {
		let name = getName('tab');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "tab",
			...tabData(name)
		}
	},
	// 宝贝轮播
	swipe() {
		let name = getName('swipe');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "swipe",
			...swipeData(name)
		}
	},
	// 搭配套餐
	promotionMeal() {
		let name = getName('promotionMeal');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "promotion",
			...promotionMealData(name)
		}
	},
	// 爆款推荐
	hotItem() {
		let name = getName('hotItem');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "hotItem",
			...hotItemData(name)
		}
	},
	// 滚动宝贝
	marqueeBlock() {
		let name = getName('marqueeBlock');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "marqueeBlock",
			...marqueeBlockData(name)
		}
	},
	// 瀑布流
	waterfall() {
		let name = getName('waterfall');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "waterfall",
			...waterfallData(name)
		}
	},
	// 左右图文
	oneRowHorizontal() {
		let name = getName('oneRowHorizontal');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "oneRowHorizontal",
			...oneRowHorizontalData(name)
		}
	},
	// 组合宝贝
	groupGoods() {
		let name = getName('groupGoods');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "groupGoods",
			...groupGoodsData(name)
		}
	},
	// 优惠券
	coupon() {
		let name = getName('coupon');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "coupon",
			...couponData(name)
		}
	},
	// 单列
	oneRow() {
		let name = getName('oneRow');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "oneRow",
			...oneRowData(name)
		}
	},
	// 双列
	twoRow() {
		let name = getName('twoRow');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "twoRow",
			...twoRowData(name)
		}
	},
	// 九宫格（三列）
	threeRow() {
		let name = getName('threeRow');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "threeRow",
			...threeRowData(name)
		}
	},
	// 底部
	pageBottom() {
		let name = getName('pageBottom');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "pageBottom",
			...pageBottomData(name)
		}
	},
	// 收藏
	favorite() {
		let name = getName('favorite');
		return {
			name,
			"p": false,
			"image": thumbnail,
			"id": null,
			"type": "favorite",
			...favoriteData(name)
		}
	},

	// 普通
	default(type) {
		let name = getName(type);
		return {
			name: getName,
			template: `<div class="${name}">
			{{ data }}
			{{ global }}
			</div>`,
			style: `.${name}{}`,
			p: false,
			image: thumbnail
		}
	}

}
export default data;