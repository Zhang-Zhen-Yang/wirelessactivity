let obj = {
	register(item, vue) {
		// alert(JSON.stringify(item));
		// alert(item.type);
		switch(item.type) {
			case 'countDown':
				// alert('countDown');
				obj.countDown(item, vue);
				break;
			case 'hotItem':
				// alert('countDown');
				obj.hotItem(item, vue);
				break;
			case 'swipe':
				obj.swipe(item, vue);
				break;
			case 'threeRow':
			case 'twoRow':
				obj.twoRow(item,vue);
				break;
			default: obj.default(item, vue);
		}
	},
	// 倒时计
	countDown(item, vue){
		vue.component(item.name, {
			// 模板
			template: item.template,
			data() {
			  return {
					window: window,
					day: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
					step: 0,
			  }
			},
			props: {
			  data: {
					type: Object,
					default() {
						return {
							type: 'countDown',
							startDate: Date.now() + 3600 * 1000,
							endDate: Date.now() + 3600 * 24 *1000,
							name: '',
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
			methods: {
				getTimeAmount() {
					// console.log('dddd');
					const now = Date.now();
		
					let amountDate;
					let step = 0;
					if(this.data.startDate > now) {
						step = 0;
						amountDate = this.data.startDate;
					}else {
						step = 1;
						amountDate = this.data.endDate;
					}
					// console.log(now >= this.data.endDate);
		
					if(now >= this.data.endDate) {
						step = 2;
						// return;
					} else {
						const amount = amountDate - now;
						const day = parseInt(amount / (3600 * 24 * 1000));
						const hours = parseInt((amount % (3600 *24 * 1000)) / (3600 * 1000));
						const minutes = parseInt(amount % (3600 * 1000) / (60 * 1000));
						const seconds = parseInt(amount % (60 * 1000) / 1000);
						// console.log([amount,day, hours, minutes,seconds]);
						this.day = day;
						this.hours = hours;
						this.minutes = minutes;
						this.seconds = seconds;
					}
					this.step = step;
					setTimeout(()=>{
						this.getTimeAmount();
					}, 1000)
				}
			},
			mounted() {
				this.getTimeAmount();
			},
		})
	},
	// 爆款推荐
	hotItem(item, vue){
		vue.component(item.name, {
			// 模板
			template: item.template,
			data() {
			  return {
					window: window,
					day: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
					step: 0,
			  }
			},
			props: {
			  data: {
					type: Object,
					default() {
						return {
							type: 'hotItem',
							startDate: Date.now() + 3600 * 1000,
							endDate: Date.now() + 3600 * 24 *1000,
							name: '',
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
			methods: {
				getTimeAmount() {
					// console.log('dddd');
					const now = Date.now();
		
					let amountDate;
					let step = 0;
					if(this.data.startDate > now) {
						step = 0;
						amountDate = this.data.startDate;
					}else {
						step = 1;
						amountDate = this.data.endDate;
					}
					// console.log(now >= this.data.endDate);
		
					if(now >= this.data.endDate) {
						step = 2;
						// return;
					} else {
						const amount = amountDate - now;
						const day = parseInt(amount / (3600 * 24 * 1000));
						const hours = parseInt((amount % (3600 *24 * 1000)) / (3600 * 1000));
						const minutes = parseInt(amount % (3600 * 1000) / (60 * 1000));
						const seconds = parseInt(amount % (60 * 1000) / 1000);
						// console.log([amount,day, hours, minutes,seconds]);
						this.day = day;
						this.hours = hours;
						this.minutes = minutes;
						this.seconds = seconds;
					}
					this.step = step;
					setTimeout(()=>{
						this.getTimeAmount();
					}, 1000)
				}
			},
			mounted() {
				this.getTimeAmount();
			},
		})
	},
	// 轮播宝贝
	swipe(item, vue){
		// alert('dddd');
		vue.component(item.name, {
			// 模板
			template: item.template,
			data() {
			  return {
					height: 200,
			  }
			},
			props: {
			  data:{
					type: Object,
					default() {
						return {
							type: 'swipe',
							list: [],
							title: '',
							link: '',
						 
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
			computed: {
				swipeStyle() {
					alert('pppppppppppppppp');
					return {
						height: `${this.height}px`,
					}
				}
			},
			methods: {
				setHeight() {
					let aspectWrap = this.$refs.aspectWrap;
					if(aspectWrap && aspectWrap[0]) {
						console.log(aspectWrap[0].clientHeight);
						let height = aspectWrap[0].clientHeight;
						if(height) {
							this.height = height;
						}
					}
				}
			},
			created() {
				// console.log('created');
			},
			mounted() {
				this.setHeight();
			},
			watch: {
				data:{
					handler(n) {
						this.$nextTick(()=>{
							this.setHeight()
						})
					},
					deep: true,
				}
			}

			
		})
	},
	twoRow(item, vue) {
		vue.component(item.name, {
			// 模板
			template: item.template,
			data() {
			  return {
					window: window,
			  }
			},
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
			computed: {
				get2ColArray(list){
					const result = [];
					let tempList = [];
					this.data.list.forEach((item) => {
						tempList.push(item);
						if (tempList.length == 2) {
							result.push(tempList);
							tempList = [];
						}
					});
					if (tempList.length > 0) {
						result.push(tempList);
					}
					return result;
				},
				get3ColArray(list){
					const result = [];
					let tempList = [];
					this.data.list.forEach((item) => {
						tempList.push(item);
						if (tempList.length == 3) {
							result.push(tempList);
							tempList = [];
						}
					});
					if (tempList.length > 0) {
						result.push(tempList);
					}
					return result;
				},
			},

		})
	},
	// 普通组件
	default(item, vue){
		vue.component(item.name, {
			// 模板
			template: item.template,
			data() {
			  return {
					window: window,
			  }
			},
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
				},
				index: {
					type: Number,
					default: 0,
				}
			}
		})
	}
}
export default obj;
