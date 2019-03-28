/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:33:14 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2019-02-18 14:38:11
 */
const itemMap = {
	// 焦点图
	focusImg: {
		type: 'focusImg',
		is: 'focusImg',
		height: 200,
		list: [
            /* {
			  pic_url: 'http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png',
			  link: 'http://www.baidu.com',
            },
            {
			  pic_url: 'http://imgs.aixifan.com/content/2018_10_4/1.538619394323806E9.png',
			  link: 'https://www.bilibili.com',
            },
            {
			  pic_url: 'http://imgs.aixifan.com/content/2018_10_9/1.5390829225147533E9.png',
			  link: 'http://www.acfun.cn/a/ac4629874',
            },*/
        ],
	},
	codeBlock: {
		type: 'codeBlock',
		is: 'codeBlock',
		/* code: `<div style="background-color: white;width: 100%;">
	<span>自定义代码块</span>
	<img src="http://imgs.aixifan.com/content/2018_10_9/1.539082923586312E9.png" style="width:100%;">
</div>`*/
		code: `<div style="background-color: white;width: 100%;">
	<div style="width: 200px;height: 200px;border: 5px solid orange;border-radius: 50%;margin: 0 auto;text-align: center;line-height:190px;">自定义代码块</div>
</div>`,
	},
	videoBlock:{
		type: 'videoBlock',
		is: 'videoBlock',
		src: 'http://192.168.1.132:8081/12.mp4',
		controls: true,
		autoplay: false,
		loop: false,
		
	},
	// 海报
	poster: {
		type: 'poster',
		is: 'poster',
		list: [
			/* {
				pic_url: 'http://imgs.aixifan.com/o_1coulu038gk31fo51uca1uacrflh.jpg',
				link: 'http://www.baidu.com',
			},*/
		],

	},
	// 轮播
	swipe: {
		type: 'swipe',
		is: 'swipe',
		show_prev_price: true,
		show_title: true,
		list: [
			
		]
	},
	// 爆款推荐
	hotItem: {
		type: 'hotItem',
		is: 'hotItem',
		list: [
			{
				pic_url: '', // 'http://imgs.aixifan.com/o_1cohvp4t315ojijt1aif1ismncd6u.jpg',
				price: '0',
				title: 'xxxxxxxxx',
				prev_price: '0',
				num_iid: '00000000',
			},
		],
		startDate: Date.now() + 3600 * 1000,
		endDate: Date.now() + 3600 * 24 *1000, 
	},
	// 单列
	oneRow: {
		type: 'oneRow',
		is: 'oneRow',
		show_prev_price: true,
		show_title: true,
		list: [
			
		]
	},
	// 九宫格
	threeRow: {
		type: 'threeRow',
		is: 'threeRow',
		show_title: true,
		show_prev_price: true,
		list: [
			
		]
	},
	// 组合宝贝
	groupGoods: {
		type: 'groupGoods',
		is: 'groupGoods',
		show_title: true,
		show_prev_price: true,
		list: [
			
			
		]
	},
	// 搭配套餐
	promotionMeal: {
		type: 'promotionMeal',
		is: 'promotionMeal',
		title: '搭配套餐',
		meal_price: '0',
		total_price: '0',
		list: [
			/* {
				pic_url: 'http://imgs.aixifan.com/o_1cohvp4t417sc127ajmj13bro1d7d.png',
				price: '111.10',
				title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
				num_iid: '562537883386',
			},
			{
				pic_url: 'http://imgs.aixifan.com/o_1cohvqs8q1toilkp139f7r0aioac.jpg',
				price: '111.10',
				title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
				num_iid: '562537883386',
			},*/
		]
	},
	// 倒计时
	countDown: {
		type: 'countDown',
		is: 'countDown',
		startDate: Date.now(),
		endDate: Date.now() + 3600 * 24 *1000,
	},
	// 双列
	twoRow: {
		type: 'twoRow',
		is: 'twoRow',
		show_prev_price: true,
		show_title: true,
		list: [
			
		],
	},
	// 左右图文
	oneRowHorizontal: {
		type: 'oneRowHorizontal',
		is: 'oneRowHorizontal',
		show_title: true,
		show_prev_price: true,
		list: [
			/* {
				title: '【猫受屋】FREEing RE从零开始的异世界生活 拉姆雷姆 1/4 手办',
				pic_url: 'https://gd4.alicdn.com/imgextra/i4/463763705/TB2jkbUv77mBKNjSZFyXXbydFXa_!!463763705.png_400x400.jpg',
				price: 1250,
				num_iid: '576663008806',
			},
			{
				title: '【猫受屋】ALTER Fate/Grand Order 贞德ALTER 手办',
				pic_url: 'https://gd4.alicdn.com/imgextra/i4/463763705/TB26X.YIwmTBuNjy1XbXXaMrVXa_!!463763705.jpg_400x400.jpg',
				price: 120.2,
				num_iid: '562044591391',
			},
			{
				title: 'Myethos 崩坏学园3 花嫁婚纱 雷电芽衣 神访版 美少女 摆件手办',
				pic_url: 'https://gd2.alicdn.com/imgextra/i4/3246021607/TB23P47r0cnBKNjSZR0XXcFqFXa_!!3246021607.jpg_400x400.jpg',
				price: 139.9,
				num_iid: '572121926025',
			},
			{
				title: '【多款】动漫美少女优质版国产手办游戏人生白二次元周边模型摆件',
				pic_url: 'https://gd3.alicdn.com/imgextra/i4/3246021607/TB2BUHKwStYBeNjSspaXXaOOFXa_!!3246021607.jpg',
				price: 186,
				num_iid: '566824926086',
			},*/
		]
	},
	// 优惠券
	coupon: {
		type: 'coupon',
		is: 'coupon',
		list: [],
	},
	// 选项卡
	tab: {
		type: 'tab',
		is: 'tab',
		activeIndex: 0,
		list: [
			{
				title: '分类一',
				children: [],
			},
			{
				title: '分类二',
				children: [],
			},
		]
	},
	// marqueeBlock　滚动宝贝
	marqueeBlock:{
		type: 'marqueeBlock',
		is: 'marqueeBlock',
		show_title: true,
		show_prev_price: true,
		list: [
			/*{
				pic_url: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/21546269/O1CN011wBFOtkoTb4U3FQ_!!0-item_pic.jpg_250x250.jpg_.webp',
				title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
				price: 154.5,
			},
			{
				pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1852234404/O1CN011iP4jmlqCEXyrn5_!!0-item_pic.jpg_250x250.jpg_.webp',
				title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
				price: 422.54
			},
			{
				pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/112370232/TB2pDnQsbZnBKNjSZFrXXaRLFXa_!!112370232.jpg_250x250.jpg_.webp',
				title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
				price: 222.41
			},
			{
				pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/16269031942644216/T1CKI.XixXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg_.webp',
				title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
				price: 555.8
			},
			{
				pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/365473342/TB26SKrysyYBuNkSnfoXXcWgVXa_!!365473342.jpg_250x250.jpg_.webp',
				title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
				price: 555.8
			},
			{
				pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1576579287/TB2bNZIcAfb_uJkSnhJXXbdDVXa_!!1576579287.jpg_250x250.jpg_.webp',
				title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
				price: 555.8
			},
			{
				pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/463763705/TB2defBbFzqK1RjSZFvXXcB7VXa_!!463763705.jpg_250x250.jpg_.webp',
				title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
				price: 555.8
			},
			{
				pic_url: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/36073717/TB2U7MOb41YBuNjy1zcXXbNcXXa_!!36073717.jpg_250x250.jpg_.webp',
				title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
				price: 555.8
			},
			{
				pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/22457324/O1CN0123yRFbZdDrBYBvn_!!0-item_pic.jpg_250x250.jpg_.webp',
				title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
				price: 555.8
			},*/
		]
	},
	// 瀑布流
	waterfall: {
		type: 'waterfall',
		is: 'waterfall',
		show_title: true,
		show_prev_price: true,
		title: '',
		leftTop: {
			pic_url: '',// 'http://imgs.aixifan.com/o_1covno6ef4911jn9gjrfr3csin.jpeg',
			link: '',
		},
		rightBottom: {
			pic_url: '',//'http://imgs.aixifan.com/o_1covno6ef68alm78elhik1svjo.jpeg',
			link: '',
		},
		list: [
			/* {
				pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/112370232/TB2pDnQsbZnBKNjSZFrXXaRLFXa_!!112370232.jpg_250x250.jpg_.webp',
				price: '111.10',
				title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
				num_iid: '562537883386',
			},
			{
				pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/463763705/TB2defBbFzqK1RjSZFvXXcB7VXa_!!463763705.jpg_250x250.jpg_.webp',
				price: '111.10',
				title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
				num_iid: '562537883386',
			},*/
		]
	},
	// 收藏
	favorite: {
		type: 'favorite',
		is: 'favorite',
		list: [
			{
				// pic_url: 'http://imgs.aixifan.com/content/2018_11_23/1.5429677248728094E9.png',
				//link: `https://favorite.taobao.com/popup/add_collection.htm?id=${window.user.shopId}&itemtype=0&sellerid=${window.user.id}&scene=taobao_shop`,
				link: '',
				shopName: `${window.user.shopName}`,
				shopLogo: `${window.user.shopLogo}`,

			}
		]
	},
	// 页面底部
	pageBottom: {
		type: 'pageBottom',
		is: 'pageBottom',
		list: [
			{
				pic_url: '',
				link: '',
			}
		]
	}
}
export default itemMap;