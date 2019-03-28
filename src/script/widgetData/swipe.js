
export default function(name) {
let template = `
<div class="${name}">
	<widget-header :title="data.title" :link="data.link" :css="{backgroundColor: 'transparent',color: 'white'}"></widget-header>
	<swipe-group  v-if="data.list.length > 0" :style="{height: height+'px'}">
		<swipe-item class="slide" v-for="item, index in data.list" :key="index">
			<goods-link :numIid="item.num_iid">
				<div class="" style="position: relative;" ref="aspectWrap">
					<aspect :ratio="1" :css="{}">
						<img :src="item.pic_url" alt="" style="width: 100%">
						<div style="position:absolute;left:0;bottom:0;width:100%;">
							<!--宝贝名称-->
							<div v-if="data.show_title"
								style="width: 100%;height: 2em;line-height: 2em;padding:0 5px;font-size: 14px;overflow: hidden;background-color:#d60934;color: white;"
							>
								{{ item.title }}
							</div>
							<div style="border-top: 1px solid #a61001;background-color:white;text-align: left; position: relative;">
								<table cellpadding="0" cellspacing="0" style="width: 100%;table-layout:fixed;">
									<tr>
										<td style="color:#d60934;padding-left:5px;">
											<!--价格-->
											<span style="font-size: 14px">¥</span><span style="font-size: 25px;">{{item.price | pri}}</span>
											<!--原价-->
											<span v-if="data.show_prev_price" style="font-size: 16px;margin-left: 5px;text-decoration: line-through;">¥{{item.prev_price | pri}}</span>
										</td>
										<td style="background-color:orange;vertical-align:middle;text-align:center;width:3em;font-size:25px;line-height:1.8em;">
											<span style="color: white;">
												购买
											</span>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</aspect>
				</div>        
			</goods-link>
		</swipe-item>
	</swipe-group>
	<empty-layout v-if="data.list.length == 0" />
</div>`;

let style =`
.${name}{
	overflow: hidden;
}
.${name} .swipe-title {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	padding: 10px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	background-color: rgba(0, 0, 0, 0.2);
	font-size: 14px;
}
.${name} .swipe-prev-price {
	position: absolute;
	left: 0;
	top: 100px;
}
.${name} .swipe-price {
	position: absolute;
	left: 0;
	top: 0;
	background-color: rgba(0, 0, 0, 0.2);
	font-size: 20px;
	padding: 0 10px;
}`;
	return {
		template,
		style,
	}
}