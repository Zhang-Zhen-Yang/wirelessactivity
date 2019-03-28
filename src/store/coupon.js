/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:33:21 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-23 16:51:56
 */
import http from '../script/http';
import api from '../script/api';
// import { loadavg } from 'os';
const store = {
	state: {
		show: false,
		tabIndex: 0,
		itemData: {},
		tabWb: {
			list: [],
			lastAction: 'loading',
			pageSize: 9,
			pageNo: 1,
			count: 0,
			itemCounts: {

			},
		},
		tabPromotion: {
			list: [],
			lastAction: 'loading',
			msg: '',
			pageSize: 100,
			pageNo: 1,
			count: 0
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
		getCoupons({state, rootState, commit,dispatch}, {pageNo = 1}){
			let {pageSize} = state.tabWb;
			let req = {
				pageNo,
				pageSize,
				status: 'NORMAL'
			}
			state.tabWb.lastAction = 'loading';
			http.post(api.getCoupons, req).then((res)=>{
				if(res.status == 200) {
					// if(res.data.success) {
						let itemCounts = {};
						state.tabWb.list = res.data.data;
						state.tabWb.count = res.data.total; 
						state.tabWb.lastAction = 'success';
						state.tabWb.pageNo = pageNo;
						res.data.itemCounts.forEach((item, index)=>{
							itemCounts[`c${item[0]}`] = item[1];
						})
						state.tabWb.itemCounts = itemCounts;
						// console.log(itemCounts);
					 //}
				} else {
					state.tabWb.lastAction = 'error';
				}
			})
		},
		// 获取官方优惠券
		getPromotionCoupon({state, rootState, commit, dispatch}){
			let req = {};
			state.tabPromotion.lastAction = 'loading';
			
				http.post(api.getPromotionCoupon, req).then((res)=>{
					if(res.status == 200) {
						console.log(res.data);
						if(res.data.success) {
							state.tabPromotion.lastAction = 'success';
							state.tabPromotion.list = res.data.data;
							state.tabPromotion.count = res.data.total;
						}else {
							state.tabPromotion.lastAction = 'error';
							if(res.data.msg) {
								state.tabPromotion.msg = res.data.msg;
							}
						}
					}else {
						state.tabPromotion.lastAction = 'error';
					}
				})
			

		}

	}
}
export default store;