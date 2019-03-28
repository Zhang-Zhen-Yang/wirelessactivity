/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:33:55 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-05 11:02:42
 */
// 动态组件
import http from '../script/http';
import api from '../script/api';
// import { loadavg } from 'os';
import Vue from 'vue';
const store = {
	// ---------------------------------------------------------------------------------------------------------
	state: {
		show: false,
		itemData: {},
		tabIndex: 0,
		tabWb: {
			list: [],
			lastAction: 'loading',
			pageSize: 2,
			pageNo: 1,
			count: 0,
			itemCounts: {

			},
		},
	},
	// ---------------------------------------------------------------------------------------------------------
	getters: {

	},
	// -----------------------------------------------------------------------------------------------------------
	mutations: {

	},
	// ------------------------------------------------------------------------------------------------------------
	actions: {
		getPromotionMealPlan({state, commit,dispatch, rootState}, {pageNo = 1}) {
			let {pageSize} = state.tabWb;
			let req = {
				pageNo,
				pageSize,
				status: 'NORMAL'
			}
			state.tabWb.lastAction = 'loading';
			http.post(api.getPromotionMealPlan, req).then((res)=>{
				if(res.status == 200) {
					if(res.data.success) {
						
						state.tabWb.list = res.data.data;
						state.tabWb.lastAction = 'success';
						// console.log(itemCounts);
					} else {
						state.tabWb.lastAction = 'error';
					}
				} else {
					state.tabWb.lastAction = 'error';
				}
			})
		}
	}
};
export default store;