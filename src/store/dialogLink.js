/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-27 14:34:29 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-19 17:04:26
 */

import http from '../script/http';
import api from '../script/api';
const store = {
	state: {
		show: false,
		tabIndex: 0,
		itemData: null,
		itemIndex: 0,
		key: '',

		tabGoods: {
			pageSize: 10,
			pageNo: 1,
			count: 0,
			lastAction: 'loading',
			type: 'onsale',
			keyword: '',
			cid: 'all',
			list: [],
		}
	},
	// ---------------------------------------------------------------------------------------------------------
	getters: {

	},
	// -----------------------------------------------------------------------------------------------------------
	mutations: {

	},
	// ------------------------------------------------------------------------------------------------------------
	actions: {
		// 获取宝贝列表
		fetchLinkGoods({state, commit},{pageNo = 1}){
			state.tabGoods.lastAction = 'loading';
			const {pageSize, type, keyword, cid} = state.tabGoods;
			let reqs = {
				pageNo,
				pageSize,
				type,
				keyword,
				fields: '',
				cid,
			};
			let apiUrl = api.getItems;
			http.post(apiUrl,reqs).then((res)=>{
				if(res.status == 200) {
					// console.log('-------------------------');
					// console.log(res.data);
					state.tabGoods.list = res.data.items.map((item,index)=>{
						return {
							title: item.title,
							pic_url: item.picUrl,
							price: item.price,
							num_iid:item.numIid,
							num: item.num,
						}
					});
					state.tabGoods.count = res.data.totalCount;
					state.tabGoods.pageNo = pageNo;
					state.tabGoods.lastAction = 'success';
				} else {
					state.tabGoods.lastAction = 'error';
				}
			})
		},
	},
}
export default store;