/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:33:28 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 15:41:46
 */
import widgetTypes from '../script/allWidgetsType';
let demo = {
	// 
	dragWidgets: {...widgetTypes},
	// 定义全局
	global: {
		title: '双十一',// 模板主题名称
		bgBody: 'rgba(168,46,46,1)',// 全局背景色
		bgBlock: 'white',// 块颜色
		bgBtn: 'rgba(76,20,124,1)',//按钮主题色
		bgLight: 'white',// 浅色背景

		colorPrice: 'rgba(146,29,29,1)', // 主题色
		colorLight: 'white',// 浅色
		colorBorder: 'rgba(128,55,88,1)',
		colorTitle: 'rgba(233,49,82,1)',// 标题颜色
		style: 'dddddd',
	},
	style: `
.action-wrap{
	padding: 5px;
}
.action-wrap-sub{
	padding: 0;
}
.action-wrap-poster,.action-wrap-favorite{
	padding: 0;
}`,
	widgets: [
		{
			name: 'coupon1',
			image: 'http://imgs.aixifan.com/o_tgseit1c1muh1fsoob811eq2ep.jpg',
			template: `
				<div class="coupon1">
					<img v-for="item, index in data.list" :src="item.pic_url">
				</div>
			`,
			style: `
				.coupon1{
					background-color: orange;
				}
				.coupon1 img{
					width: 50%;
					vertical-align: top;
				}
			`
		},
	],
	// 组件列表
	list: [
		// 底部
		{
			type: 'pageBottom',
			is: 'pageBottom',
			list: [
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_11_23/1.5429677248728094E9.png',
					link: 'http://www.baidu.com',
				}
			]
		},
		// 店铺收藏
		{
			type: 'favorite',
			is: 'favorite',
			list: [
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_11_23/1.5429677248728094E9.png',
					link: 'http://www.baidu.com',
					shopName: '店铺名称',
					shopLogo: 'http://imgs.aixifan.com/Fq_SgIH7uU1Q6Vxs_sy1_i6xfDxl?imageView2/1/w/200/h/110',
				}
			]
		},
		// 海报
		{
			type: 'poster',
			is: 'poster',
			list: [
				{
					pic_url: 'http://imgs.aixifan.com/o_1coulu038gk31fo51uca1uacrflh.jpg',
					link: 'http://www.baidu.com',
				},
			],

		},
		// 代码块
		{
			type: 'codeBlock',
			is: 'codeBlock',
			code: `<div style="background-color: white;">
	dddd
	<img src="http://imgs.aixifan.com/o_1cr1s1jsd13bt12ubkfsttg1up91c.png" style="width:100%;">
</div>`
		},
		// 瀑布流
		{
			type: 'waterfall',
			is: 'waterfall',
			show_title: true,
			show_prev_price: true,
			title: 'haaaaa',
			leftTop: {
				pic_url: 'http://imgs.aixifan.com/o_1covno6ef4911jn9gjrfr3csin.jpeg',
				link: '',
			},
			rightBottom: {
				pic_url: 'http://imgs.aixifan.com/o_1covno6ef68alm78elhik1svjo.jpeg',
				link: '',
			},
			list: [
				{
					pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/112370232/TB2pDnQsbZnBKNjSZFrXXaRLFXa_!!112370232.jpg_250x250.jpg_.webp',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/463763705/TB2defBbFzqK1RjSZFvXXcB7VXa_!!463763705.jpg_250x250.jpg_.webp',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/o_1cr1s1jse1tpfnqmf621nvp1631i.png',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/o_1cr1s1jse10j31h9441o1mq81u7t1k.png',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/o_1cr1s1jse1v86r3gs4vkj1gi91l.jpg',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/o_1cr1s1jse5fu14s86fdctohfr1s.png',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/o_1cr1s1jsemjm102i1h5rq6s1se120.png',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/o_1cr1s15ho4721q71jr51lb16s87.jpg',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/o_1cr1s1jsd9oaohr1htucrjbpt16.png',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_4/1.5386193834518318E9.png',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
			]
		},
		// 海报
		{
			type: 'poster',
			is: 'poster',
			list: [
				{
					pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/112370232/TB2pDnQsbZnBKNjSZFrXXaRLFXa_!!112370232.jpg_250x250.jpg_.webp',
					link: 'http://www.baidu.com',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/463763705/TB2defBbFzqK1RjSZFvXXcB7VXa_!!463763705.jpg_250x250.jpg_.webp',
					link: 'http://www.baidu.com',
				},
			],

		},
		// 视频
		/* {
			type: 'videoBlock',
			is: 'videoBlock',
			src: 'http://192.168.1.132:8081/魅族a20.mp4',
			controls: true,
			autoplay: false,
			loop: false,
		},*/
		// 滚动宝贝
		{
			type: 'marqueeBlock',
			is: 'marqueeBlock',
			show_title: true,
			show_prev_price: true,
			list: [
				{
					pic_url: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/21546269/O1CN011wBFOtkoTb4U3FQ_!!0-item_pic.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 154.5,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1852234404/O1CN011iP4jmlqCEXyrn5_!!0-item_pic.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 422.54,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/112370232/TB2pDnQsbZnBKNjSZFrXXaRLFXa_!!112370232.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 222.41,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/16269031942644216/T1CKI.XixXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/365473342/TB26SKrysyYBuNkSnfoXXcWgVXa_!!365473342.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1576579287/TB2bNZIcAfb_uJkSnhJXXbdDVXa_!!1576579287.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/463763705/TB2defBbFzqK1RjSZFvXXcB7VXa_!!463763705.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/36073717/TB2U7MOb41YBuNjy1zcXXbNcXXa_!!36073717.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/22457324/O1CN0123yRFbZdDrBYBvn_!!0-item_pic.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
			]
		},
		// 优惠券
		{
			type: 'coupon',
			is: 'coupon',
			list: [
				{ 	
					from: 'wb',
					name: 'name',
					id: 125572,
					form: 'wb',
					"type": "Price",
					"decreaseMoney": 1,
					"discountRate": 0, 
					"totalPrice": 0,
					"startTime": {
						"date": 29, "day": 6, "hours": 0, "minutes": 0, "month": 8, "seconds": 0, "time": 1538150400000, "timezoneOffset": -480, "year": 118
					},
					"endTime": {
						"date": 29, "day": 1, "hours": 23, "minutes": 59, "month": 9, "seconds": 0, "time": 1540828740000, "timezoneOffset": -480, "year": 118
					}
				},
			]
		},
		// 选项卡
		{
			type: 'tab',
			is: 'tab',
			list: [
				{
					title: 'tab1',
					children: [
						{
							type: 'oneRow',
							show_title: true,
							show_prev_price: true,
							list: [
								{
									pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383768642033358E9.png',
									price: '111.10',
									prev_price: '111.10',
									title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
									num_iid: '562537883386',
								},
							]
						},
						{
							type: 'oneRow',
							show_title: true,
							show_prev_price: true,
							list: [
								{
									pic_url: 'http://imgs.aixifan.com/content/2018_10_4/1.538619393466329E9.png',
									price: '111.10',
									prev_price: '111.10',
									title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
									num_iid: '562537883386',
								},
							]
						}
					],
				},
				{
					title: 'tab2',
					children: [],
				},
				{
					title: 'tab3',
					children: [],
				},
			],
			activeIndex: 0,
		},
		// 宝贝轮播
		{
			type: 'swipe',
			is: 'swipe',
			show_title: true,
			show_prev_price: true,
			list: [
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.538376699388065E9.png',
					price: '111.10',
					prev_price: '111.10',
					title: '1 活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.53837684719185E9.png',
					price: '56.20',
					prev_price: '111.10',
					title: '2 创意韩国diy少女心爆棚的生日礼物女生朋友闺蜜小仙女网红ins超火',
					num_iid: '572151043949',
				},
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383768540656388E9.png',
					price:'6499.00',
					prev_price: '111.10',
					title: '3 创意结婚礼物北欧家居简约鹿摆件客厅电视酒柜装饰品乔迁新居礼品',
					num_iid: '549855957659',
				},
			],
			title: 'ddddd',
			link: 'ddddddd',
		},
		{
			type: 'oneRow',
			is: 'oneRow',
			show_title: true,
			show_prev_price: true,
			list: [
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383768642033358E9.png',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383768826902342E9.png',
					price: '56.20',
					prev_price: '111.10',
					title: '创意韩国diy少女心爆棚的生日礼物女生朋友闺蜜小仙女网红ins超火',
					num_iid: '572151043949',
				},
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383767494606688E9.png',
					price:'6499.00',
					prev_price: '111.10',
					title: '创意结婚礼物北欧家居简约鹿摆件客厅电视酒柜装饰品乔迁新居礼品',
					num_iid: '549855957659',
				},
			]
		},
		{
			type: 'promotionMeal',
			is: 'promotionMeal',
			total_price: '204',
			meal_price: '200',
			id: '00',
			link: '#',
			list: [
				{
					pic_url: 'http://imgs.aixifan.com/o_1cohvp4t31msc67e5tfjegmbo71.jpg',
					price: '111.10',
					prev_price: '111.10',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
				{
					pic_url: 'http://imgs.aixifan.com/o_1cohvp4t31mgu30s3b8ea29ai72.png',
					price: '56.20',
					prev_price: '111.10',
					title: '创意韩国diy少女心爆棚的生日礼物女生朋友闺蜜小仙女网红ins超火',
					num_iid: '572151043949',
				},
				{
					pic_url: 'http://imgs.aixifan.com/o_1cohvp4t38ea1utl13p1p3afnn6v.png',
					price:'6499.00',
					prev_price: '111.10',
					title: '创意结婚礼物北欧家居简约鹿摆件客厅电视酒柜装饰品乔迁新居礼品',
					num_iid: '549855957659',
				},
			],
			title: 'test'
		},
		{
			type: 'hotItem',
			is: 'hotItem',
			list: [
				{
					// pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383618517512574E9.png',
					pic_url: 'http://imgs.aixifan.com/o_1cohvqs8q10fg16241h2o1lll1ehpaf.png',
					price: '111.10',
					origin_price: '1111.0',
					title: '活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发',
					num_iid: '562537883386',
				},
			],
			startDate: Date.now() + 3600 * 1000,
			endDate: Date.now() + 3600 * 24 *1000,
			name: '活动',
		},
		{
			type: 'countDown',
			is: 'countDown',
			startDate: Date.now() + 3600 * 1000,
			endDate: Date.now() + 3600 * 24 *1000,
			name: '活动',
		},
		{
			type: 'twoRow',
			is: 'twoRow',
			show_title: true,
			show_prev_price: true,
			list: [
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.538361846762504E9.png',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 154.5,
					prev_price: '111.10',
				},
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.538361842663271E9.png',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 422.54,
					prev_price: '111.10',
				},
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383618551376271E9.png',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 222.41,
					prev_price: '111.10',
				},
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383619056402261E9.png',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
			]
		},
		{
			type: 'groupGoods',
			is: 'groupGoods',
			show_title: true,
			show_prev_price: true,
			list: [
				{
					pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/463763705/TB2hvLon29TBuNjy1zbXXXpepXa_!!463763705.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 154.5,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/502501971/TB2Te5XkdrJ8KJjSspaXXXuKpXa_!!502501971.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 422.54,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/660904652/TB2LjYuXC7PL1JjSZFHXXcciXXa_!!660904652.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 222.41,
					prev_price: '111.10',
				},
				
			]
		},
		{
			type: 'threeRow',
			is: 'threeRow',
			show_title: true,
			show_prev_price: true,
			list: [
				{
					pic_url: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/21546269/O1CN011wBFOtkoTb4U3FQ_!!0-item_pic.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 154.5,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1852234404/O1CN011iP4jmlqCEXyrn5_!!0-item_pic.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 422.54,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/112370232/TB2pDnQsbZnBKNjSZFrXXaRLFXa_!!112370232.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 222.41,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/16269031942644216/T1CKI.XixXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/365473342/TB26SKrysyYBuNkSnfoXXcWgVXa_!!365473342.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1576579287/TB2bNZIcAfb_uJkSnhJXXbdDVXa_!!1576579287.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/463763705/TB2defBbFzqK1RjSZFvXXcB7VXa_!!463763705.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/36073717/TB2U7MOb41YBuNjy1zcXXbNcXXa_!!36073717.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
				{
					pic_url: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/22457324/O1CN0123yRFbZdDrBYBvn_!!0-item_pic.jpg_250x250.jpg_.webp',
					title: 'anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi',
					price: 555.8,
					prev_price: '111.10',
				},
			]
		},

		{
			type: 'oneRowHorizontal',
			is: 'oneRowHorizontal',
			show_title: true,
			show_prev_price: true,
			list: [
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383618524172773E9.png',
					title: '1韩国东大门秋冬1018新款针织女高领女毛衣宽松加长',
					price: '52.54',
					prev_price: '111.10',
				},
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383619083142548E9.png',
					title: '1韩国东大门秋冬1018新款针织女高领女毛衣宽松加长',
					price: '52.54',
					prev_price: '111.10',
				},
				{
					pic_url: 'http://imgs.aixifan.com/content/2018_10_1/1.5383619110351908E9.png',
					title: '1韩国东大门秋冬1018新款针织女高领女毛衣宽松加长',
					price: '52.54',
					prev_price: '111.10',
				},
			]
		},
	]
}



// demo = {"global":{"title":"双十一","bgBody":"rgba(168,46,46,1)","bgBlock":"white","bgBtn":"rgba(76,20,124,1)","bgLight":"white","colorPrice":"rgba(146,29,29,1)","colorLight":"white","colorBorder":"rgba(128,55,88,1)","colorTitle":"rgba(233,49,82,1)"},"style":"","widgets":[{"name":"coupon1","image":"http://imgs.aixifan.com/o_tgseit1c1muh1fsoob811eq2ep.jpg","template":"\n\t\t\t\t<div class=\"coupon1\">\n\t\t\t\t\t<img v-for=\"item, index in data.list\" :src=\"item.pic_url\">\n\t\t\t\t</div>\n\t\t\t","style":"\n\t\t\t\t.coupon1{\n\t\t\t\t\tbackground-color: orange;\n\t\t\t\t}\n\t\t\t\t.coupon1 img{\n\t\t\t\t\twidth: 50%;\n\t\t\t\t\tvertical-align: top;\n\t\t\t\t}\n\t\t\t"}],"list":[{"type":"poster","is":"poster","list":[{"pic_url":"http://imgs.aixifan.com/o_1coulu038gk31fo51uca1uacrflh.jpg","link":"http://www.baidu.com"}]},{"type":"poster","is":"coupon1","list":[{"pic_url":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/112370232/TB2pDnQsbZnBKNjSZFrXXaRLFXa_!!112370232.jpg_250x250.jpg_.webp","link":"http://www.baidu.com"},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/463763705/TB2defBbFzqK1RjSZFvXXcB7VXa_!!463763705.jpg_250x250.jpg_.webp","link":"http://www.baidu.com"}]},{"type":"videoBlock","is":"videoBlock","src":"http://192.168.1.132:8081/12.mp4","controls":true,"autoplay":false,"loop":false},{"type":"marqueeBlock","is":"marqueeBlock","show_title":true,"show_prev_price":true,"list":[{"pic_url":"https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/21546269/O1CN011wBFOtkoTb4U3FQ_!!0-item_pic.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":154.5},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1852234404/O1CN011iP4jmlqCEXyrn5_!!0-item_pic.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":422.54},{"pic_url":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/112370232/TB2pDnQsbZnBKNjSZFrXXaRLFXa_!!112370232.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":222.41},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/16269031942644216/T1CKI.XixXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/365473342/TB26SKrysyYBuNkSnfoXXcWgVXa_!!365473342.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1576579287/TB2bNZIcAfb_uJkSnhJXXbdDVXa_!!1576579287.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/463763705/TB2defBbFzqK1RjSZFvXXcB7VXa_!!463763705.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8},{"pic_url":"https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/36073717/TB2U7MOb41YBuNjy1zcXXbNcXXa_!!36073717.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8},{"pic_url":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/22457324/O1CN0123yRFbZdDrBYBvn_!!0-item_pic.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8}]},{"type":"coupon","is":"coupon","list":[{"denominations":100,"creat_time":"2000-01-01 00:00:00","end_time":"2000-01-01 00:00:00","condition":501},{"denominations":100,"creat_time":"2000-01-01 00:00:00","end_time":"2000-01-01 00:00:00","condition":501},{"denominations":100,"creat_time":"2000-01-01 00:00:00","end_time":"2000-01-01 00:00:00","condition":501}]},{"type":"tab","is":"tab","list":[{"title":"tab1","children":[{"type":"oneRow","show_title":true,"show_prev_price":true,"list":[{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.5383768642033358E9.png","price":"111.10","title":"活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发","num_iid":"562537883386"}]},{"type":"oneRow","show_title":true,"show_prev_price":true,"list":[{"pic_url":"http://imgs.aixifan.com/content/2018_10_4/1.538619393466329E9.png","price":"111.10","title":"活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发","num_iid":"562537883386"}]}]},{"title":"tab2","children":[]},{"title":"tab3","children":[]}],"activeIndex":0},{"type":"swipe","is":"swipe","show_title":true,"show_prev_price":true,"list":[{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.538376699388065E9.png","price":"111.10","title":"活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发","num_iid":"562537883386"},{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.53837684719185E9.png","price":"56.20","title":"创意韩国diy少女心爆棚的生日礼物女生朋友闺蜜小仙女网红ins超火","num_iid":"572151043949"},{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.5383768540656388E9.png","price":"6499.00","title":"创意结婚礼物北欧家居简约鹿摆件客厅电视酒柜装饰品乔迁新居礼品","num_iid":"549855957659"}],"title":"ddddd","link":"ddddddd"},{"type":"oneRow","is":"oneRow","show_title":true,"show_prev_price":true,"list":[{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.5383768642033358E9.png","price":"111.10","title":"活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发","num_iid":"562537883386"},{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.5383768826902342E9.png","price":"56.20","title":"创意韩国diy少女心爆棚的生日礼物女生朋友闺蜜小仙女网红ins超火","num_iid":"572151043949"},{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.5383767494606688E9.png","price":"6499.00","title":"创意结婚礼物北欧家居简约鹿摆件客厅电视酒柜装饰品乔迁新居礼品","num_iid":"549855957659"}]},{"type":"promotionMeal","is":"promotionMeal","list":[{"pic_url":"http://imgs.aixifan.com/o_1cohvp4t31msc67e5tfjegmbo71.jpg","price":"111.10","title":"活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发","num_iid":"562537883386"},{"pic_url":"http://imgs.aixifan.com/o_1cohvp4t31mgu30s3b8ea29ai72.png","price":"56.20","title":"创意韩国diy少女心爆棚的生日礼物女生朋友闺蜜小仙女网红ins超火","num_iid":"572151043949"},{"pic_url":"http://imgs.aixifan.com/o_1cohvp4t38ea1utl13p1p3afnn6v.png","price":"6499.00","title":"创意结婚礼物北欧家居简约鹿摆件客厅电视酒柜装饰品乔迁新居礼品","num_iid":"549855957659"}],"title":"test"},{"type":"hotItem","is":"hotItem","list":[{"pic_url":"http://imgs.aixifan.com/o_1cohvqs8q10fg16241h2o1lll1ehpaf.png","price":"111.10","origin_price":"1111.0","title":"活动小礼品婚礼婚庆抛洒布娃娃套餐大礼包小公仔玩偶毛绒玩具批发","num_iid":"562537883386"}],"startDate":1540542075311,"endDate":1540624875311,"name":"活动"},{"type":"countDown","is":"countDown","startDate":1540542075311,"endDate":1540624875311,"name":"活动"},{"type":"twoRow","is":"twoRow","show_title":true,"show_prev_price":true,"list":[{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.538361846762504E9.png","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":154.5},{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.538361842663271E9.png","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":422.54},{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.5383618551376271E9.png","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":222.41},{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.5383619056402261E9.png","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8}]},{"type":"groupGoods","is":"groupGoods","show_title":true,"show_prev_price":true,"list":[{"pic_url":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/463763705/TB2hvLon29TBuNjy1zbXXXpepXa_!!463763705.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":154.5},{"pic_url":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/502501971/TB2Te5XkdrJ8KJjSspaXXXuKpXa_!!502501971.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":422.54},{"pic_url":"https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/660904652/TB2LjYuXC7PL1JjSZFHXXcciXXa_!!660904652.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":222.41}]},{"type":"threeRow","is":"threeRow","show_title":true,"show_prev_price":true,"list":[{"pic_url":"https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/21546269/O1CN011wBFOtkoTb4U3FQ_!!0-item_pic.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":154.5},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1852234404/O1CN011iP4jmlqCEXyrn5_!!0-item_pic.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":422.54},{"pic_url":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/112370232/TB2pDnQsbZnBKNjSZFrXXaRLFXa_!!112370232.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":222.41},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/16269031942644216/T1CKI.XixXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/365473342/TB26SKrysyYBuNkSnfoXXcWgVXa_!!365473342.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1576579287/TB2bNZIcAfb_uJkSnhJXXbdDVXa_!!1576579287.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8},{"pic_url":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/463763705/TB2defBbFzqK1RjSZFvXXcB7VXa_!!463763705.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8},{"pic_url":"https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/36073717/TB2U7MOb41YBuNjy1zcXXbNcXXa_!!36073717.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8},{"pic_url":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/22457324/O1CN0123yRFbZdDrBYBvn_!!0-item_pic.jpg_250x250.jpg_.webp","title":"anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi anmi","price":555.8}]},{"type":"oneRowHorizontal","is":"oneRowHorizontal","show_title":true,"show_prev_price":true,"list":[{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.5383618524172773E9.png","title":"1韩国东大门秋冬1018新款针织女高领女毛衣宽松加长","price":"52.54"},{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.5383619083142548E9.png","title":"1韩国东大门秋冬1018新款针织女高领女毛衣宽松加长","price":"52.54"},{"pic_url":"http://imgs.aixifan.com/content/2018_10_1/1.5383619110351908E9.png","title":"1韩国东大门秋冬1018新款针织女高领女毛衣宽松加长","price":"52.54"}]}]};
export default demo;