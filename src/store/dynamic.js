/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:33:49 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 16:12:09
 */
// 动态组件
import http from '../script/http';
import api from '../script/api';
// import { loadavg } from 'os';
import Vue from 'vue';
import util from '../script/util';
import registerWidget from '../script/registerWidget';
import widgetCreateData from '../script/widgetCreateData';
const store = {
	// ---------------------------------------------------------------------------------------------------------
	state: {
		styleDom: {},
		pageSize: 15,
		temporaryWidgets: [

		],
		widgets: {
			coupon:{
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [
					/* {
						name: 'coupon-test',
						image: 'http://imgs.aixifan.com/o_tgseit1c1muh1fsoob811eq2ep.jpg',
						p: true,
						template: `
							<div class="coupon-test">
								<coupon :data="data" :global="global" />
							</div>
						`,
						style: `
							.coupon-test{
								background-color: orange;
							}
							.coupon-test .coupon-list-item{
								background-image: url(http://imgs.aixifan.com/o_1cohvqs8q10fg16241h2o1lll1ehpaf.png);
								background-size: contain;
							}
						`
					},
					{
						name: 'coupon2',
						p: true,
						image: 'http://imgs.aixifan.com/o_tgseit1d1dg0au514itiaa1qfru.jpg',
						template: `
							<div>
								<span>banana</span>
							</div>
						`,
						style: `
							
						`
					},
					{
						name: 'coupon3',
						p: true,
						image: 'http://imgs.aixifan.com/content/2018_10_23/1.5402501695298846E9.png',
						template: `
							<div>
								<span>orange</span>
							</div>
						`,
						style: `
							
						`
					},*/

				]
			} ,
			oneRow: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			waterfall: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			twoRow: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			threeRow: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			groupGoods: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			hotItem: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			oneRowHorizontal: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			marqueeBlock: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			tab: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			countDown: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			swipe: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			promotionMeal: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [],
			},
			// 店铺收藏
			favorite: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [
					{
						name: 'favorite-1',
						image: 'https://img.wonbao.net/wonbao-wireless/collection/collection01.png',
						p: true,
						template: `
							<a-link :href="data.list[0].link">
								<div class="favorite-1">
									<img src="https://img.wonbao.net/wonbao-wireless/collection/collection01.png">
								</div>
							</a-link>
						`,
						style: `
							.favorite-1{
								background-color: orange;
							}
							.favorite-1 img{
								width: 100%;
								vertical-align:middle;
							}
						`	
					},
					{
						name: 'favorite-2',
						image: 'https://img.wonbao.net/wonbao-wireless/collection/collection02.png',
						p: true,
						template: `
							<a-link :href="data.list[0].link">
								<div class="favorite-2">
									<img src="https://img.wonbao.net/wonbao-wireless/collection/collection02.png">
								</div>
							</a-link>
						`,
						style: `
							.favorite-2{
								background-color: orange;
							}
							.favorite-2 img{
								width: 100%;
								vertical-align:middle;
							}
						`	
					},
					{
						name: 'favorite-3',
						image: 'https://img.wonbao.net/wonbao-wireless/collection/collection03.png',
						p: true,
						template: `
							<a-link :href="data.list[0].link">
								<div class="favorite-3">
									<img src="https://img.wonbao.net/wonbao-wireless/collection/collection03.png">
								</div>
							</a-link>
						`,
						style: `
							.favorite-3{
								background-color: orange;
							}
							.favorite-3 img{
								width: 100%;
								vertical-align:middle;
							}
						`	
					},
					{
						name: 'favorite-4',
						image: 'https://img.wonbao.net/wonbao-wireless/collection/collection04.png',
						p: true,
						template: `
							<a-link :href="data.list[0].link">
								<div class="favorite-4">
									<img src="https://img.wonbao.net/wonbao-wireless/collection/collection04.png">
								</div>
							</a-link>
						`,
						style: `
							.favorite-4{
								background-color: orange;
							}
							.favorite-4 img{
								width: 100%;
								vertical-align:middle;
							}
						`	
					},
				],
			},
			// 底部
			pageBottom: {
				lastAction: 'initing',
				pageNo: 1,
				count: 0,
				list: [
					/* {
						name: 'pageBottom-1',
						image: 'https://img.wonbao.net/wonbao-wireless/bottom/bottom01.png',
						p: true,
						template: `
						<a-link :href="data.list[0].link">
							<div class="pageBottom-1">
								<img src="https://img.wonbao.net/wonbao-wireless/bottom/bottom01.png">
							</div>
						</a-link>
						`,
						style: `
							.pageBottom-1{
								background-color: orange;
							}
							.pageBottom-1 img{
								width: 100%;
								vertical-align: middle;
							}
							
						`
					},
					{
						name: 'pageBottom-2',
						image: 'https://img.wonbao.net/wonbao-wireless/bottom/bottom02.png',
						p: true,
						template: `
						<a-link :href="data.list[0].link">
							<div class="pageBottom-2">
								<img src="https://img.wonbao.net/wonbao-wireless/bottom/bottom02.png">
							</div>
						</a-link>
						`,
						style: `
							.pageBottom-2{
								background-color: orange;
							}
							.pageBottom-2 img{
								width: 100%;
								vertical-align: middle;
							}
							
						`
					},
					{
						name: 'pageBottom-3',
						image: 'https://img.wonbao.net/wonbao-wireless/bottom/bottom03.png',
						p: true,
						template: `
						<a-link :href="data.list[0].link">
							<div class="pageBottom-3">
								<img src="https://img.wonbao.net/wonbao-wireless/bottom/bottom03.png">
							</div>
						</a-link>
						`,
						style: `
							.pageBottom-3{
								background-color: orange;
							}
							.pageBottom-3 img{
								width: 100%;
								vertical-align: middle;
							}
							
						`
					},
					{
						name: 'pageBottom-4',
						image: 'https://img.wonbao.net/wonbao-wireless/bottom/bottom04.png',
						p: true,
						template: `
						<a-link :href="data.list[0].link">
							<div class="pageBottom-3">
								<img src="https://img.wonbao.net/wonbao-wireless/bottom/bottom04.png">
							</div>
						</a-link>
						`,
						style: `
							.pageBottom-4{
								background-color: orange;
							}
							.pageBottom-4 img{
								width: 100%;
								vertical-align: middle;
							}
							
						`
					},
					{
						name: 'pageBottom-5',
						image: 'https://img.wonbao.net/wonbao-wireless/bottom/bottom05.png',
						p: true,
						template: `
						<a-link :href="data.list[0].link">
							<div class="pageBottom-5">
								<img src="https://img.wonbao.net/wonbao-wireless/bottom/bottom05.png">
							</div>
						</a-link>
						`,
						style: `
							.pageBottom-5{
								background-color: orange;
							}
							.pageBottom-5 img{
								width: 100%;
								vertical-align: middle;
							}
							
						`
					},
					{
						name: 'pageBottom-6',
						image: 'https://img.wonbao.net/wonbao-wireless/bottom/bottom06.png',
						p: true,
						template: `
						<a-link :href="data.list[0].link">
							<div class="pageBottom-6">
								<img src="https://img.wonbao.net/wonbao-wireless/bottom/bottom06.png">
							</div>
						</a-link>
						`,
						style: `
							.pageBottom-6{
								background-color: orange;
							}
							.pageBottom-6 img{
								width: 100%;
								vertical-align: middle;
							}
							
						`
					},
					{
						name: 'pageBottom-7',
						image: 'https://img.wonbao.net/wonbao-wireless/bottom/bottom07.png',
						p: true,
						template: `
						<a-link :href="data.list[0].link">
							<div class="pageBottom-7">
								<img src="https://img.wonbao.net/wonbao-wireless/bottom/bottom07.png">
							</div>
						</a-link>
						`,
						style: `
							.pageBottom-7{
								background-color: orange;
							}
							.pageBottom-7 img{
								width: 100%;
								vertical-align: middle;
							}
							
						`
					},
					{
						name: 'pageBottom-8',
						image: 'https://img.wonbao.net/wonbao-wireless/bottom/bottom08.png',
						p: true,
						template: `
						<a-link :href="data.list[0].link">
							<div class="pageBottom-8">
								<img src="https://img.wonbao.net/wonbao-wireless/bottom/bottom08.png">
							</div>
						</a-link>
						`,
						style: `
							.pageBottom-8{
								background-color: orange;
							}
							.pageBottom-8 img{
								width: 100%;
								vertical-align: middle;
							}
							
						`
					},
					{
						name: 'pageBottom-9',
						image: 'https://img.wonbao.net/wonbao-wireless/bottom/bottom09.png',
						p: true,
						template: `
						<a-link :href="data.list[0].link">
							<div class="pageBottom-9">
								<img src="https://img.wonbao.net/wonbao-wireless/bottom/bottom09.png">
							</div>
						</a-link>
						`,
						style: `
							.pageBottom-9{
								background-color: orange;
							}
							.pageBottom-9 img{
								width: 100%;
								vertical-align: middle;
							}
							
						`
					},
					{
						name: 'pageBottom-10',
						image: 'https://img.wonbao.net/wonbao-wireless/bottom/bottom10.png',
						p: true,
						template: `
						<a-link :href="data.list[0].link">
							<div class="pageBottom-10">
								<img src="https://img.wonbao.net/wonbao-wireless/bottom/bottom10.png">
							</div>
						</a-link>
						`,
						style: `
							.pageBottom-10{
								background-color: orange;
							}
							.pageBottom-10 img{
								width: 100%;
								vertical-align: middle;
							}
							
						`
					},*/
				]
			}
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
		//注册动态组件
		registerWidget({state, commit, dispatch,rootState}, {item, force=false}) {
			let widget = Vue.component(item.is || item.name || item.type);
			if(!widget || force) {
				console.log('----------------------------------------------------------------------------------');
				console.log(item.name);
				// 注册
				registerWidget.register(item, Vue);
				/* Vue.component(item.name, {
					template: item.template,
					props: {
						data:{
							type: Object,
							default() {
							return {
								type: type,
								list: [],
							}
							}
						},
						global: {
							type: Object,
							default() {
								return {};
							}
						}
					},
					data() {
						return {
							tabIndex: 0,
						}
					}
				})*/
				let name = item.name;
				if(!state.styleDom[`w-${name}`]){
					state.styleDom[`w-${name}`] = document.createElement('style');
					state.styleDom[`w-${name}`].id = `w-${name}`
					document.querySelector('head').appendChild(state.styleDom[`w-${name}`]);
				  }
				  state.styleDom[`w-${name}`].innerHTML = item.style;
				// this.renderWidgetStyle(item.name, item.style);
			}
		},
		// 注册全部组件
		registerAllWidget({state, commit, dispatch,rootState}) {
			let widgets = state.widgets;
			for(let i in widgets) {
				// console.log(i);
				widgets[i].list.forEach((item,index)=>{
					// console.log(item.name);
					dispatch('registerWidget', {item});
				})
			}
		},
		// 修改组件
		modifyDynamic({state, commit, dispatch,rootState}, {item}) {
			console.log(JSON.stringify(item));
			rootState.modals[1].show = true;
			rootState.modals[1].item = item;
		},
		// 添加动态组件
		addDynamic({state, commit, dispatch, rootState}, {list, type}) {
			commit('setLoadingMask', {show: true, text: 'adding'});
			setTimeout(()=>{
				commit('setLoadingMask', {show: false, text: 'adding'});
				commit('showSnackbar', { text: '添加成功', timeout: 2000 });
				let name = type + new util.getRequestID();
				let item = {
				  name: name,
				  template: `<div class="${name}">
					{{ data }}
					{{ global }}
				  </div>`,
				  style: `.${name}{}`,
				  p: false,
				  image: 'http://imgs.aixifan.com/content/2018_10_25/1.5404475032973752E9.png'
				}
				list.push(item);
    			dispatch('registerWidget', {item, force: true});


			}, 2000)
		},
		// 删除
		deleteDynamic({state, commit, dispatch, rootState}, {list, index}) {
			commit('setLoadingMask', {show: true, text: 'removing'});
			setTimeout(()=>{
				commit('setLoadingMask', {show: false, text: ''});
				commit('showSnackbar', { text: '移除成功', timeout: 2000 });
				list.splice(index, 1);
			}, 2000)
		},
		// 更新
		updateDynamic({state, commit, dispatch, rootState}, {item}) {
			// console.log(JSON.stringify(item));
			commit('setLoadingMask', {show: true, text: 'updating'});
			setTimeout(()=>{
				commit('setLoadingMask', {show: false, text: ''});
				commit('showSnackbar', { text: '修改成功', timeout: 2000 });
			}, 2000)
		},

		// ============================================================================================

		// 获取样式列表
		getTemplateStyles({state, commit, dispatch, rootState, getters}, {type, pageNo = 1}) {
			
			if(getters.isAdmin) {
				state.pageSize = 14;
			}
			console.log(type);
			/*if(type == 'pageBottom'){
				return;
			}*/
			state.widgets[type].lastAction = 'loading';
			let req = {
				pageNo,
				pageSize: state.pageSize,
				type,
			}
			if(!getters.isAdmin) {
				req.remark = true;
			}
			http.post(api.getTemplateStyles, req).then((res)=>{
				if(res.status == 200) {
					if(res.data.success) {
						state.widgets[type].lastAction = 'success';
						state.temporaryWidgets = state.temporaryWidgets.concat(state.widgets[type].list);
						state.widgets[type].list = res.data.data.map((item)=>{
							return {...item.html, id: item.id, type: item.type};
						});
						state.widgets[type].list.forEach((item)=>{
							// alert(item.name);
							dispatch('registerWidget', {item, force: true});
						})
						console.log('---------------------------------------------',state.temporaryWidgets.length);
						state.widgets[type].count = res.data.total;
						state.widgets[type].pageNo = pageNo;
					} else {
						state.widgets[type].lastAction = 'error';
					}
					// console.log(res.data);
				} else {
					state.widgets[type].lastAction = 'error';
				}
			})
		},
		// 保存样式
		addTemplateStyle({state, commit, dispatch, rootState}, {type}){
			

			// commit('showSnackbar', { text: '添加成功', timeout: 2000 });
			let name = type + new util.getRequestID();
			let item;
			if(widgetCreateData[type]) {
				item = widgetCreateData[type]();
			} else {
				item = widgetCreateData.default(type);
			}
			
			/* = {
				name: name,
				template: `<div class="${name}">
				{{ data }}
				{{ global }}
				</div>`,
				style: `.${name}{}`,
				p: false,
				image: 'http://imgs.aixifan.com/content/2018_10_25/1.5404475032973752E9.png'
			}*/

			let req = {
				type,  
				labels: '',
				thumbnail: '',
				html: JSON.stringify(item),
				remark: false,
				other: '',

			}
			commit('setLoadingMask', {show: true, text: '添加中'});
			http.post(api.addOrUpdateTemplateStyle, req).then((res)=>{
				if(res.status == 200) {
					if(res.data.success) {
						commit('showSnackbar', { text: '添加成功', timeout: 2000 });
						dispatch('getTemplateStyles', {type, pageNo: 1});
					} else {
						commit('showSnackbar', { text: '添加失败', timeout: 2000 });
					}
					commit('setLoadingMask', {show: false, text: '添加中'});
				} else {
					commit('setLoadingMask', {show: false, text: '添加中'});
				}
			})

			/* list.push(item);
			dispatch('registerWidget', {item, force: true});*/
		},
		// 修改样式
		updateTemplateStyle({state, commit, dispatch, rootState}, {item}){
			console.log(JSON.stringify(item));
			commit('setLoadingMask', {show: true, text: '修改中'});
			// commit('showSnackbar', { text: '添加成功', timeout: 2000 });
			let req = {
				templateStyleId: item.id,
				type: item.type,  
				labels: '',
				thumbnail: '',
				html: JSON.stringify(item),
				remark: item.p,
				other: '',
			}
			http.post(api.addOrUpdateTemplateStyle, req).then((res)=>{
				if(res.status == 200) {
					if(res.data.success) {
						commit('showSnackbar', { text: '修改成功', timeout: 2000 });
						
					} else {
						commit('showSnackbar', { text: '修改失败', timeout: 2000 });
					}
					commit('setLoadingMask', {show: false, text: '修改中'});
				} else {
					commit('setLoadingMask', {show: false, text: '修改中'});
				}
			})
		},
		// 删除样式
		deletePageStyle({state, commit, dispatch, rootState}, {item}){
			console.log(JSON.stringify(item));
			let type = item.type;
			let id = item.id;
			let req = {
				templateStyleId: id
			}
			let result = confirm('确定要删除');
			if (!result) {
				return; 
			}
			commit('setLoadingMask', {show: true, text: '删除中···'});
			http.post(api.deletePageStyle, req).then((res)=>{
				if(res.status == 200) {
					if(res.data.success) {
						commit('showSnackbar', { text: '删除成功', timeout: 2000 });
						state.widgets[type].list = state.widgets[type].list.filter((item)=>{
							return item.id != id;
						})
					} else {
						commit('showSnackbar', { text: '删除失败', timeout: 2000 });
					}
					commit('setLoadingMask', {show: false, text: '删除中···'});
					// console.log(res.data);
				} else {
					commit('setLoadingMask', {show: false, text: '删除中···'});
					commit('showSnackbar', { text: '删除失败', timeout: 2000 });
				}
			})
		},
		// 获取单个样式
		getTemplateStyle({state, commit, dispatch, rootState}, {id, callback}) {
			let req = {
				templateStyleId: id
			};
			commit('setLoadingMask', {show: true, text: '添加中'});
			http.post(api.getTemplateStyle, req).then((res)=>{
				if(res.status == 200) {
					if(res.data.success) {
						/* state.widgets[type].lastAction = 'success';
						state.widgets[type].list = res.data.data.map((item)=>{
							return {...item.html, id: item.id, type: item.type};
						});
						state.widgets[type].list.forEach((item)=>{
							// alert(item.name);
							dispatch('registerWidget', {item, force: true});
						})
						state.widgets[type].count = res.data.total;
						state.widgets[type].pageNo = pageNo;*/
						let item = { ...res.data.html, id: res.data.id, type: res.data.type};
						state.temporaryWidgets.push(item);
						dispatch('registerWidget', {item, force: true});
						callback(res.data.html.name);
						
					} else {
						// state.widgets[type].lastAction = 'error';
						callback('');
					}
					// console.log(res.data);
				} else {
					// state.widgets[type].lastAction = 'error';
					commit('showSnackbar', { text: '获取样式失败', timeout: 2000 });
					callback('');
				}
				commit('setLoadingMask', {show: false, text: '添加中'});
			}, ()=>{
				commit('showSnackbar', { text: '获取样式失败', timeout: 2000 });
				commit('setLoadingMask', {show: false, text: '添加中'});
				callback('');
			})
		}
		
	}
}
export default store;