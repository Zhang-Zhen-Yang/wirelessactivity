/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:34:07 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:34:07 
 */
// 撤销 重做
import http from '../script/http';
import api from '../script/api';
import Vue from 'vue';
let actions = {
	getCurrentStep(rootState) {
		let { activeIndex, subActiveIndex, data} = rootState;
		let history = {
			activeIndex,
			subActiveIndex,
			data
		}
		return JSON.stringify(history);
	},
}
const store = {
	// ---------------------------------------------------------------------------------------------------------
	state: {
		prevSteps: [

		],
		nextSteps: [

		]
	},
	// ---------------------------------------------------------------------------------------------------------
	getters: {

	},
	// -----------------------------------------------------------------------------------------------------------
	mutations: {

	},
	// ------------------------------------------------------------------------------------------------------------
	actions: {
		
		// 添加历史记录
		addStep({state, rootState, commit, dispatch}) {
			let currentStep = actions.getCurrentStep(rootState);
			if(state.prevSteps.length == 0 || state.prevSteps[state.prevSteps.length - 1] != currentStep) {
				state.prevSteps.push(currentStep);
				state.nextSteps = [];
			}
		},
		setStep({state, rootState, commit, dispatch}, {type}) {
			if(type == 'undo') {
				if(state.prevSteps.length > 0) {
					state.nextSteps.push(actions.getCurrentStep(rootState));
					let prevStep = state.prevSteps.pop();
					dispatch('fillStep', {step: prevStep});
				}

			} else if(type == 'redo') {
				if(state.nextSteps.length > 0) {
					state.prevSteps.push(actions.getCurrentStep(rootState));
					let nextStep = state.nextSteps.pop();
					dispatch('fillStep', {step: nextStep});
				}
			}
		},
		fillStep({state, rootState, commit, dispatch}, {step}) {
			let stepData = JSON.parse(step);
			let {
				activeIndex,
				subActiveIndex,
				data
			} = stepData;
			rootState.activeIndex = activeIndex;
			rootState.subActiveIndex = subActiveIndex;
			rootState.data = data;
		}
	}
}
export default store;