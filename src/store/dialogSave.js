/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-05 10:59:57 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-12-dd 15:52:27
 */
// 保存弹窗
import http from '../script/http';
import api from '../script/api';
import util from '../script/util';
// import { loadavg } from 'os';
import Vue from 'vue';
const store = {
	// ---------------------------------------------------------------------------------------------------------
	state: {
		show: false,
		title: '',// 活动名称
		templateTitle: '',
		label: '',
		attention: 100,
		domeImage: '',
		domeImageWeiTao: '',
		domeImageJiaoDian: '',
		id: null,
		templateId: null,
		saveMore: false,// 另存一份
		startDate: '',
		endDate: '',


		afterSave: {
			show: false,
			id: '0',
			templateId: '0',
		},

		// 保存模板时样式弹窗是否显示
		widgetShow: false,
		widgetType: null,
		widgetItem: null,

	},
	// ---------------------------------------------------------------------------------------------------------
	getters: {

	},
	// -----------------------------------------------------------------------------------------------------------
	mutations: {

	},
	// ------------------------------------------------------------------------------------------------------------
	actions: {
		save({rootState, state, commit, getters, dispatch}, opts) {
			rootState.activeIndex = -1;
			Vue.nextTick(()=>{

				let html = util.getHtml()
				// console.log(html);
				let data = rootState.data;

				/*console.log(JSON.stringify(data));
				return;*/

				let widgets = data.widgets || [];
				let localWidgetsMap = {};
				widgets.forEach((item, index)=>{
					// console.log(JSON.stringify(item));
					localWidgetsMap[item.name] = item;
				})

				let globalWidgets = rootState.dynamic.widgets;
				let globalWidgetsMap = {}; 
				
				for(let i in globalWidgets) {
					globalWidgets[i].list.forEach((item, index)=>{
						globalWidgetsMap[item.name] = item
					})
				}
				
				let temporaryWidgets = rootState.dynamic.temporaryWidgets;
				let temporaryWidgetsMap = {};
				temporaryWidgets.forEach((item, index)=>{
					temporaryWidgetsMap[item.name] = item;
				})
				//console.log(JSON.stringify(globalWidgetsMap));
				
				let resultWidgetList = [];
				data.list.forEach((item, index)=>{
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
				let result = {
					...rootState.data,
					widgets: resultWidgetList
				}
				// alert('save 1111');
				console.log(result);
				console.log(JSON.stringify(result));

				let reqOpts = {};
				// 如果是管理员 ===================================================================
				if(getters.isAdmin) {
					reqOpts = {...opts,
						demoJSON: '{}',
						page_title: result.global.title,
						pageTitle:  result.global.title,
						code: JSON.stringify(result),
						domeImageWeiTao: opts.domeImageWeiTao,
						domeImageJiaoDian: opts.domeImageJiaoDian,
						domeImage: opts.domeImage,
						remark: JSON.stringify({
							domeImageWeiTao: opts.domeImageWeiTao,
							domeImageJiaoDian: opts.domeImageJiaoDian,
							domeImage: opts.domeImage,
						}),
						html,
						remark: 1,
						title: opts.templateTitle,
						
					}
					
					let requestUrl;
					// 如果是另存一份
					if(state.saveMore) {
						requestUrl = api.addtemplate;
					} else if(getters.queryObj.templateId) {// 如果是保存且有templateId, 是更新模板
						requestUrl = api.addtemplate;
						reqOpts.templateId = getters.queryObj.templateId;
					} else {// 是保存但没有templateId, 是更新
						requestUrl = api.addtemplate;
					}
					commit('setLoadingMask', {show: true, text: '保存中···'});
					http.post(requestUrl, reqOpts).then((res)=>{
						if(res.status == 200) {
							if(res.data.success) {
								commit('showSnackbar', {text: '保存成功', timeout: 2000});
								state.show = false; 
							} else {
								// 如果有提示信息 alert
								if(res.data.msg) {
									alert(res.data.msg);
								}
								commit('showSnackbar', {text: '保存失败', timeout: 2000});
							}
							commit('setLoadingMask', {show: false, text: 'saving'});
							console.log(res.data);
						} else {
							commit('setLoadingMask', {show: false, text: 'saving'});
							commit('showSnackbar', {text: '保存失败(net)', timeout: 2000});
						}
					})

				} else { // 普通用户身份===============================================================
					rootState.data.global.title = opts.title;
					reqOpts = {
						// templateId: state.id,
						pageId: getters.queryObj.planId,
						planId: getters.queryObj.planId,
						json: JSON.stringify(result/*rootState.data*/),
						// title: opts.title,
						startTime: opts.startDate,
						endTime: opts.endDate,
						code: JSON.stringify(rootState.data),
						userDesc: 1,
						link: 'https://wonbao.ews.m.jaeapp.com/wirelesspagenew/activityNew',
						remark: 1,
						html
					}
					if(getters.queryObj.templateId) {
						reqOpts.templateId = getters.queryObj.templateId;
					}
					
					let requestUrl;
					// 如果是另存一份
					if(state.saveMore) {
						requestUrl = api.addPage;
					} else if(getters.queryObj.planId){ // 如果是保存且有计划id
						requestUrl = api.updatePage;
					} else { // 如果是保存但没有计划id
						requestUrl = api.addPage;
					}
					commit('setLoadingMask', {show: true, text: '保存中···'});
					http.post(requestUrl, reqOpts).then((res)=>{
						if(res.status == 200) {
							if(res.data.success) {
								commit('showSnackbar', {text: '保存计划成功', timeout: 2000});
								state.show = false; 
								console.log(res.data);
								let id = res.data.id || reqOpts.planId;
								
								state.afterSave.id = id;
								state.afterSave.templateId = getters.queryObj.templateId || state.templateId;
								state.afterSave.show = true;
							} else {
								// 如果有提示信息 alert
								if(res.data.msg) {
									alert(res.data.msg);
								}
								commit('showSnackbar', {text: '保存计划失败', timeout: 2000});
							}
							commit('setLoadingMask', {show: false, text: 'saving'});
							console.log(res.data);
						} else {
							commit('setLoadingMask', {show: false, text: 'saving'});
							commit('showSnackbar', {text: '保存计划失败(net)', timeout: 2000});
						}
					})

				}
				console.log(reqOpts);

				/* commit('setLoadingMask', {show: true, text: 'saving'});
				setTimeout(()=>{
					commit('setLoadingMask', {show: false, text: 'saving'});
					state.show = false;
					commit('showSnackbar', {text: '保存成功(fake)', timeout: 2000});
				}, 5000)*/
			})
		},
		tttt({rootState, state, commit, getters, dispatch}) {
			// console.log(util.getHtml());
			const node = document.querySelector('.dynamic-item');
			console.log(node);
			domtoimage.toCanvas(node)
			.then(function (canvas) {
				console.log(canvas);
				canvas.style.position = 'fixed';
				canvas.style.left = 0;
				canvas.style.top = 0;
				let img = new Image();
				img.src="http://imgs.aixifan.com/o_1ct8bim14778lnd1e0pdqb0a2k.jpg"
				img.onload=function(){
					// context.drawImage(img, 0, 0);
				}
				canvas.addEventListener('click', (e)=>{
					let x = e.pageX;
					let y = e.pageY;
					console.log([x, y]);
					context.font="50px Georgia";
					context.fillText("w3school.com.cn",10,90);
					let imageData = context.getImageData(10, 10, 300,300);
					console.log(imageData);
					/* imageData.data.forEach((item)=>{
						item = 255 - item;
					})*/
					let idata = context.createImageData(imageData);
					context.putImageData(imageData, 20, 20);

				}, false)
				document.body.appendChild(canvas);
				let context = canvas.getContext('2d');
				console.log(context.getImageData(10, 10, 100,100));
				console.log(context);
			})
			.catch(function (error) {
				console.error('oops, something went wrong!', error);
			});
			
		},

		// 保存时 上传图片
		saveImageUpload({rootState, state, commit, getters, dispatch}, {formdata, type = 'default',callback}) {
			//type [default, cover, thumbnail];
			/*
				default 默认 普通用户也能用
				cover 模板封面，焦点图，微淘图
				thumbnail 各个样式的缩略图
			*/
			commit('setLoadingMask', {show: true, text: '上传中···'});
			
			/* setTimeout(()=>{
				if(typeof callback == 'function') {
					callback('apple');
				}
				commit('setLoadingMask', {show: false, text: '上传中···'});
			}, 2000)*/

			let XHR = new XMLHttpRequest();
			commit('setLoadingMask', {show: true, text: '上传中···'});
			XHR.open('post', `${window.remote}${api.uploadPage2}`);
			XHR.send(formdata)
			XHR.onreadystatechange=function(e){		                
				if(XHR.readyState==4){                    
					if((XHR.status >=200 && XHR.status < 300 ) || XHR.status == 304){
						commit('setLoadingMask', {show: false, text: '上传中···'});
						// alert('上传成功');
						let res = JSON.parse(XHR.response);
						if(res.success){
							// alert('上传成功');
							commit('showSnackbar', {text: '上传成功'});
							// alert(res.thumbnail);
							callback(res.thumbnail);
							if (JSON.stringify(rootState.dialogImage.pictureCategory || {}).indexOf('无线活动页素材') < 0) {
								console.log('无线活动页一项，重新获取');
								dispatch('getPictureCategory');
							}
							if(rootState.dialogImage.pictureCategoryId == -1 ||rootState.dialogImage.pictureCategoryName == '无线活动页素材') {
								dispatch('getPictureItems', {pageSize: 1});
							} else{
								
							}
	
						} else {
							// alert('上传失败');
							if(res.msg) {
								alert(res.msg);
							} else {
								commit('showSnackbar', {text: '上传失败'});
							}
						}
						//判读是否有错误
						/* if(XHR.responseText.indexOf('"msg"')>-1){
							alert('保存失败：'+XHR.responseText); 
						}else{
							var fn=success();
							if(typeof fn=='function'){
								// alert(XHR.response);
								// success()(JSON.parse(XHR.response).name);
								//2018
								var resultImgName = JSON.parse(XHR.response)[0].content;
								success(resultImgName)(resultImgName)
							}
						} */
					   
					}else{
						commit('setLoadingMask', {show: false, text: '上传中···'});
						// alert('上传失败');
						commit('showSnackbar', {text: '上传失败'});
					}
				}
						
			};
			
		}
	}
};
export default store;