/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:34:02 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 13:50:52
 */
import widgetItemMap from '../script/widgetItemMap';
import http from '../script/http';
import api from '../script/api';
import demo from './demo';
import demo2 from './demo2';
import Vue from 'vue';
import util from '../script/util';
// 优惠券弹窗
import coupon from './coupon';
import dynamic from './dynamic';
import promotionMeal from './promotionMeal';
import undoredo from './undoredo';
import link from './dialogLink';
import dialogImage from './dialogImage';
import dialogGoods from './dialogGoods';
import dialogCode from './dialogCode';
import dialogSave from './dialogSave';
import transform from '../script/base64Transform';
import previewFragment from '../script/previewFragment';
import widgetTypes from '../script/allWidgetsType';
const store = {
	state: {
		modals: [
			// goospicker 宝贝弹窗--------------------------------------------------
			{
				show: false,
				lastAction: 'loading',
				count: 0,
				list: [],
				itemData: {
					type: null,
					list: [],
				},
				mode: 'add',
				allowCount: 5,
				
				pageNo: 1,
				pageNo:1,
				pageSize: 15,
				type:'onsale',
				cid: 'all',
				keyword: '',
				

				tabIndex: 0,
				promotionPageSize: 15,
				promotionLastAction: 'loading',
				promotionPageNo: 1,
				promotionCount: 0,
				promotionList: [],
				promotion: 0,
				promotionType: '',
				activityId: 0,
				activityName: '',
			},
			// monaco
			{
				show: false,
				item: null,
			},
			// snackbar
			{
				show: false,
				text: '',
				timeout:2000,
			},
			// imagepicker 图片空间 海报-----------------------------------------------------
			{
				show: false,
				pageSize: 20,
				pageNo: 1,
				hastNext: true,
				pictureCategoryId: -1,
				itemData: {

				},
				itemIndex: 0,
				list: [],
				lastAction: 'linding',
				allowCount: 1,
				selectedPic: '',
				tabIndex: 0,

				color: '所有颜色',
				industry: '所有主题',
				tag:'所有标签',
				sort: '综合人气',
				posterPageSize:20,
				posterPageNo: 1,
				posterCount: 0,
				posters: [],
				posterLastAction: 'loading',
			},
		],
		name: 'apple',
		activeIndex: 0,
		subActiveIndex: null,
		prev: [],
		next: [],
		data: {
			global: {
				bgBlock: "rgba(255,255,255,1)",
				bgBody:"rgba(255,255,255,1)",
				bgLight: "rgba(255,255,255,1)",
				bgBtn: "rgba(245,166,35,1)",
				colorBorder: "rgba(128,55,88,1)",
				colorLight: "rgba(255,255,255,1)",
				colorPrice:	"rgba(146,29,29,1)",
				colorPrevPrice: "rgba(146,29,29,1)",
				colorTitle: "rgba(233,49,82,1)",
				title: "无线活动页",
			},
			style: ``,
			list: [], 
		},// demo,

		
		
		loadingMask: {
			show: false,
			text: '加载中···'
		},
		// 预见览弹窗
		preview: {
			id: null,
			show: false,
			link: '',
			previewData: '',
		}
	},
	// ---------------------------------------------------------------------------------------------------------
	getters: {
		// 是否管理员
		isAdmin(state) {
			// return false;
			if(window.user.id == '105227988' && util.getQueryString().admin != undefined) {
				return true;
			}
			return false;
		},
		queryObj() {
			return util.getQueryString();
		},
		// 样式id与项的映射
		idMapItem(state){
			let map = {};
			// 模板本身依赖的组件
			state.data.widgets.forEach((item, index)=>{
				if(item.name && item.image && item.id) {
					map[item.id] = {
						is: item.name,
						image: item.image,
						id: item.id,
					}
				}
			});
			// 右侧的模板列表
			let widgets = state.dynamic.widgets;
			for (let i in widgets) {
				widgets[i].list.forEach((item, index)=>{
					if(item.name && item.image && item.id) {
						map[item.id] = {
							is: item.name,
							image: item.image,
							id: item.id,
						}
					}
				})
			}
			// 临时加载的模板
			let temporaryWidgets = state.dynamic.temporaryWidgets;
			temporaryWidgets.forEach((item, index)=>{
				if(item.name && item.image && item.id) {
					map[item.id] = {
						is: item.name,
						image: item.image,
						id: item.id,
					}
				}
			})
			return map;
		}
	},
	// -----------------------------------------------------------------------------------------------------------
	mutations: {
		setActiveIndex(state, {activeIndex}) {
			state.activeIndex = activeIndex;
			state.subActiveIndex = null;
		},
		setSubActiveIndex(state, {subActiveIndex}) {
			state.subActiveIndex = subActiveIndex;
		},
		showSnackbar(state,{text,timeout=2000}) {
			state.modals[2].text = text;
			state.modals[2].timeout = timeout;
			state.modals[2].show = true;
		},

		setLoadingMask(state, {show=true, text='加载中···'}) {
			state.loadingMask.text = text;
			state.loadingMask.show = show;
		}
	},
	// -------------------------------------------------------------------------------------------------------------
	actions: {
		// 初始化 网络请求
		init({state, commit, dispatch, getters}){
			// 注册所有的动态组件
			dispatch('registerAllWidget');
			/* const reqOpts = {
				templateId: queryPairing.templateId
			}*/
			let {planId, templateId}  = getters.queryObj;
			if(planId) {
				commit('setLoadingMask', {show: true, text: '加载中···'});
				dispatch('getPageData', {planId});
			} else if(templateId){
				commit('setLoadingMask', {show: true, text: '加载中···'});
				dispatch('getTemplateData', {templateId});
			} else if (window.test) { // 如果是测试
				// state.data = demo;

				let templateData = demo2.code;
				templateData.dragWidgets = {...widgetTypes,...(templateData.dragWidgets || {})}
				try{
					// 对本模板所依赖的组件进行注册
					templateData.widgets.forEach((item, index)=>{
						dispatch('registerWidget', {item})
					});
				} catch(e) {

				}
				state.data = templateData;
				state.dialogSave.title = demo2.title;
				state.dialogSave.attention = demo2.attention || 100;
				state.dialogSave.domeImage = demo2.domeImage || '';
				state.dialogSave.label = demo2.labels || '';
				state.dialogSave.startDate = '';
				state.dialogSave.endDate = '';
				// state.dialogSave.domeImageWeiTao = res.data.result.weitao || '';
				// state.dialogSave.domeImageJiaoDian = res.data.result.jiaodian || '';
				state.dialogSave.id = demo2.id;
				state.dialogSave.templateId = demo2.template_id;
			} else {
				let newData = JSON.parse(JSON.stringify(demo2));
				// newData.code.widgets = [];
				newData.code.list = [];
				newData.code.global.title = '无线活动页';

				let templateData = newData.code;
				templateData.dragWidgets = {...widgetTypes,...(templateData.dragWidgets || {})}
				try{
					// 对本模板所依赖的组件进行注册
					templateData.widgets.forEach((item, index)=>{
						dispatch('registerWidget', {item})
					});
				} catch(e) {

				}
				state.data = templateData;
				state.dialogSave.title = '无线活动页';
				state.dialogSave.attention = demo2.attention || 100;
				state.dialogSave.domeImage = demo2.domeImage || '';
				state.dialogSave.label = demo2.labels || '';
				state.dialogSave.startDate = '';
				state.dialogSave.endDate = '';
				// state.dialogSave.domeImageWeiTao = res.data.result.weitao || '';
				// state.dialogSave.domeImageJiaoDian = res.data.result.jiaodian || '';
				state.dialogSave.id = demo2.id;
				state.dialogSave.templateId = demo2.template_id;
			}
			
			
		},
		// 通过模板id获取模板数据
		getTemplateData({state, commit, dispatch}, {templateId}) {
			const reqOpts = {
				templateId,
			};
			
			http.post(api.getTemplate, reqOpts).then((res)=>{
				if(res.status == 200) {
					if(res.data.success) {
						try{
							// 对本模板所依赖的组件进行注册
							res.data.code.widgets.forEach((item, index)=>{
								console.log(item);
								dispatch('registerWidget', {item, force: true})
							});
						} catch(e) {
		
						}
						let templateData = res.data.code;
						templateData.dragWidgets = {...widgetTypes, ...(templateData.dragWidgets || {})}
						
						state.data = templateData;
						// state.data = res.data.code;
						// state.dialogSave.title = res.data.title;
						state.dialogSave.templateTitle = res.data.title;
						state.dialogSave.attention = res.data.attention;
						state.dialogSave.domeImage = res.data.domeImage;
						state.dialogSave.label = res.data.labels || '';
						state.dialogSave.domeImageWeiTao = res.data.result.weitao || '';
						state.dialogSave.domeImageJiaoDian = res.data.result.jiaodian || '';
						state.dialogSave.id = res.data.id;
						// state.data = demo;
						
					} else {
						commit('showSnackbar', {text: '加载数据出错', timeout: 2000});
					}
				} else {
					commit('showSnackbar', {text: '加载数据出错(net)', timeout: 2000});
				}
				commit('setLoadingMask', {show: false, text: '加载中···'});
			})
		},
		// 通过计划id获取模板数据
		getPageData({state, commit, dispatch}, {planId}) {
			const reqOpts = {
				planId,
			};
			http.post(api.getPagenew, reqOpts).then((res)=>{
				if(res.status == 200) {
					if(res.data.success) {
						let templateData = res.data;
						templateData.dragWidgets = {...widgetTypes,...(templateData.json.dragWidgets || {})}
						try{
							// 对本模板所依赖的组件进行注册
							res.data.json.widgets.forEach((item, index)=>{
								dispatch('registerWidget', {item})
							});
						} catch(e) {
		
						}
						
						state.data = templateData.json;
						// state.dialogSave.title = res.data.title;
						state.dialogSave.templateTitle = res.data.title;
						state.dialogSave.attention = res.data.attention || 100;
						state.dialogSave.domeImage = res.data.domeImage || '';
						state.dialogSave.label = res.data.labels || '';
						state.dialogSave.startDate = res.data.start_time.time || '';
						state.dialogSave.endDate = res.data.end_time.time || '';
						// state.dialogSave.domeImageWeiTao = res.data.result.weitao || '';
						// state.dialogSave.domeImageJiaoDian = res.data.result.jiaodian || '';
						state.dialogSave.id = res.data.id;
						state.dialogSave.templateId = res.data.template_id;
						
						// state.data = demo;
						
					} else {
						commit('showSnackbar', {text: '加载数据出错', timeout: 2000});
					}
				} else {
					commit('showSnackbar', {text: '加载数据出错(net)', timeout: 2000});
				}
				commit('setLoadingMask', {show: false, text: '加载中···'});
			})
		},
		setAction({state, commit, dispatch}, {type, index}) {
			let pickItem;
			switch(type) {
				// 向上
				case 'up':
					if(index == 0) {
						return;
					}
					dispatch('addStep');
					if(state.activeIndex > 0 ) {
						const distIndex = state.activeIndex - 1;
						commit('setActiveIndex',{activeIndex: distIndex});
					}
					pickItem = state.data.list.splice(index, 1);
					state.data.list.splice(index - 1,0,pickItem[0]);
					break;
				// 向下
				case 'down':
					dispatch('addStep');
					pickItem = state.data.list.splice(index + 1, 1)
					state.data.list.splice(index,0,pickItem[0]);
					commit('setActiveIndex',{activeIndex: index + 1});
					break;
				// 删除
				case 'delete':
					if(confirm('确定要删除该模块')) {
						dispatch('addStep');
						if(index + 1 == state.data.list.length) {
							commit('setActiveIndex',{activeIndex: index - 1});
						}
						pickItem = state.data.list.splice(index, 1);
					}
					
					break;
				default: break;
			}
			// alert([type, index]);
		},
		
		setSubAction({state, commit, dispatch}, {type, index, parentIndex}) {
			let pickItem;
			const tabIndex = state.data.list[parentIndex].activeIndex;
			const subActiveIndex = state.subActiveIndex;
			let items = state.data.list[parentIndex].list[tabIndex].children;
			switch(type) {
				// 向上
				case 'up':
					if(index == 0) {
						return;
					}
					dispatch('addStep');
					if(subActiveIndex > 0 ) {
						const distIndex = subActiveIndex - 1;
						commit('setSubActiveIndex',{subActiveIndex: distIndex});
					}
					pickItem = items.splice(index, 1);
					state.data.list[parentIndex].list[tabIndex].children.splice(index - 1,0,pickItem[0]);
					break;
				// 向下
				case 'down':
					dispatch('addStep');
					pickItem = items.splice(index + 1, 1)
					state.data.list[parentIndex].list[tabIndex].children.splice(index,0,pickItem[0]);
					commit('setSubActiveIndex',{subActiveIndex: index + 1});
					break;
				// 删除
				case 'delete':
					if(confirm('确定要删除该模块')){
						dispatch('addStep');
						if(index + 1 == items.length) {
							commit('setSubActiveIndex',{subActiveIndex: index - 1});
						}
						pickItem = state.data.list[parentIndex].list[tabIndex].children.splice(index, 1);
					}
					break;
				default: break;
			}
			// alert([type, index]);
		},
		addWidget({state, commit, dispatch, getters},{data, index, dragArea}) {
			// console.log([data, index, dragArea,parentIndex]);
			try{
				const widgetData = JSON.parse(data);
				const type = widgetData.type;

				let itemData = JSON.parse(JSON.stringify(widgetItemMap[type]));
				new Promise((resolve, reject)=>{
					// alert(type)
					let presetId = state.data.dragWidgets&&state.data.dragWidgets[type] ? state.data.dragWidgets[type].id : null
					// alert(presetId);
					if(presetId) {
						if(getters.idMapItem[presetId]) {
							let widgetIs = getters.idMapItem[presetId].is;
							itemData.is = widgetIs;
							resolve();
						} else {
							console.log('getters 里没有');
							dispatch('getTemplateStyle', {id: presetId, callback:(widgetIs)=>{
								itemData.is = widgetIs;
								resolve();
							}})
						}
					} else {
						console.log('没有presetId');
						resolve();
					}
				}).then(()=>{
					const item = itemData;
					// console.log(item);
					dispatch('addStep');
					state.data.list.splice(index + (dragArea == 'top' ? 0 : 1),0, item);
					commit('setActiveIndex',{activeIndex: (dragArea == 'top' ? 0 : 1) + index});
				},()=>{

				})


				
			}catch(e){
				console.warn(e);
			}
		},
		addSubWidget({state, commit, dispatch, getters},{data, index, dragArea, parentIndex}) {
			// console.log([data, index, dragArea,parentIndex]);
			// alert(parentIndex);
			try{
				const widgetData = JSON.parse(data);
				const type = widgetData.type;
				// if(type == 'oneRow' || type == 'twoRow'){
				if(type != 'tab'){
					dispatch('addStep');
					let itemData = JSON.parse(JSON.stringify(widgetItemMap[type]));
					new Promise((resolve, reject) => {
						let presetId;
						presetId = (state.data.dragWidgets && state.data.dragWidgets[type]) ? state.data.dragWidgets[type].id : null;
						
						if(presetId) {
							if(getters.idMapItem[presetId]) {
								let widgetIs = getters.idMapItem[presetId].is;
								// alert(widgetIs);
								itemData.is = widgetIs;
								resolve();
							} else {
								console.log('getters 里没有');
								dispatch('getTemplateStyle', {id: presetId, callback:(widgetIs)=>{
									itemData.is = widgetIs;
									resolve();
								}})
							}
						} else {
							console.log('没有presetId');
							resolve();
						}
					}).then(()=>{
						// alert(parentIndex);

						const item = itemData;
						const tabIndex = state.data.list[parentIndex].activeIndex;
		
						console.log(JSON.stringify(state.data.list[parentIndex].list[tabIndex]));
		
						state.data.list[parentIndex].list[tabIndex].children.splice(index + (dragArea == 'top' ? 0 : 1),0, item);
						commit('setActiveIndex',{activeIndex: parentIndex});
						commit('setSubActiveIndex',{subActiveIndex: dragArea == 'top' ? index : index + 1});
					},()=>{

					})


				} else {
					alert('选项卡中不支持再嵌套选项卡模块');
				}
			}catch(e){
				console.warn(e);
			}
		},

		// 添加历史记录
		pushStep({state, commit}){

		},
		// 撤销
		undo({state, commit}) {

		},
		// 重做
		redo({state, commit}) {

		},
		
		// 清除内容
		clearup({state, commit,dispatch}) {
			state.activeIndex = -1;
			state.data.list = [];
		},
		// 预览
		preview({state, commit,dispatch, getters}) {
			let htmlCode = previewFragment.getHtml();
			

			let data = state.data;
			let widgets = data.widgets || [];
			let localWidgetsMap = {};
			widgets.forEach((item, index)=>{
				// console.log(JSON.stringify(item));
				localWidgetsMap[item.name] = item;
			})
			let globalWidgets = state.dynamic.widgets;
			let globalWidgetsMap = {}; 
			for(let i in globalWidgets) {
				globalWidgets[i].list.forEach((item, index)=>{
					globalWidgetsMap[item.name] = item
				})
			}
			//console.log(JSON.stringify(globalWidgetsMap));
			let temporaryWidgets = state.dynamic.temporaryWidgets;
			let temporaryWidgetsMap = {};
			temporaryWidgets.forEach((item, index)=>{
				temporaryWidgetsMap[item.name] = item;
			})



			let resultWidgetList = [];
			state.data.list.forEach((item, index)=>{
				let widgetIs = item.is;
				if(widgetIs) {
					if(globalWidgetsMap[widgetIs]) {
						resultWidgetList.push(globalWidgetsMap[widgetIs]);
					}else if(temporaryWidgetsMap[widgetIs]) {
						resultWidgetList.push(temporaryWidgetsMap[widgetIs]);
					}else if(localWidgetsMap[widgetIs]){
						resultWidgetList.push(localWidgetsMap[widgetIs]);
					}
				}
				// tab
				if(item.type == 'tab') {
					item.list.forEach((tabItem)=>{
						tabItem.children.forEach((tabChildItem)=>{
							let cwidgetIs = tabChildItem.is;
							if(cwidgetIs) {
								if(globalWidgetsMap[cwidgetIs]) {
									resultWidgetList.push(globalWidgetsMap[cwidgetIs]);
								}else if(temporaryWidgetsMap[cwidgetIs]) {
									resultWidgetList.push(temporaryWidgetsMap[cwidgetIs]);
								}else if(localWidgetsMap[cwidgetIs]){
									resultWidgetList.push(localWidgetsMap[cwidgetIs]);
								}
							} 
						})
					})
				}
			});
			console.log(JSON.parse(JSON.stringify(resultWidgetList)));
			// return;
			/* let result = {
				widgets: resultWidgetList
			}*/
			state.data.widgets = resultWidgetList; 


			// let code = transform.encode(htmlCode);
			// state.preview.link = `data:text/html;base64,${code}`;

			let previewData = JSON.stringify(state.data);

			
			/* state.preview.show = true;
			return;*/

			if(state.preview.previewData == previewData) {
				state.preview.show = true;
				return;
			}


			let reqOpts = {
				templateId: 110,// getters.queryObj.templateId || state.dialogSave.templateId,
				title: 'test',
				userDesc: '用户备注',
				startTime:  Date.now(),
				endTime:  Date.now() - 0 + 3600*24*1000000,
				remark: 2, //   区分手机预览   传入值 1或者 2  1表示正常保存，2表示预览保存
				json: previewData,

			}

			commit('setLoadingMask', {show: true, text: '生成中···'});
			http.post(api.addPage, reqOpts).then((res)=>{
				if(res.status == 200) {
					if(res.data.success) {
						state.preview.id = res.data.id;
						state.preview.previewData = previewData;
						state.preview.show = true;
					} else {

					}
					commit('setLoadingMask', {show: false, text: '生成中···'});
				} else {
					commit('setLoadingMask', {show: false, text: '生成中···'});
				}
			})
			




		}	
		
	},
	modules: {
		coupon,
		dynamic,
		promotionMeal,
		undoredo,
		link,
		dialogImage,
		dialogGoods,
		dialogCode,
		dialogSave,
	}
}
export default store;