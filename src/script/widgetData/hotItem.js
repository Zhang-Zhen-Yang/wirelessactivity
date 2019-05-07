
export default function(name) {
let template = `
<div class="${name}" style="background-color: white;">
	<div class="hot-item" v-for="item,index in data.list" :key="index" style="border: 1px solid #d60934">
		<goods-link :numIid="item.num_iid">
			<!--宝贝图片-->
			<img  v-if="item.pic_url" :src="item.pic_url" alt="" style="width:100%;vertical-align: middle;">
			<empty-layout v-if="!item.pic_url"></empty-layout>
			<table cellspacing="0" cellpadding="0" style="width:100%;table-layout:fixed;">
				<tr>
					<!--名称-->
					<td style="width: 50%;border-top:1px solid #d60934;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 14px;padding: 5px;color: #666666;">
						{{ item.title }}
					</td>
					<td style="border-left:1px solid #d60934;border-top:1px solid #d60934;padding-left:5px;">
						<div class="price-block">
							<!--价格-->
							<span style="font-size:18px;color:#d60934;line-height:2.5em;">¥{{item.price|pri}}</span>
							<!--原价-->
							<span style="font-size:14px;margin-left:10px;color:#d60934;text-decoration: line-through;line-height:2.5em;">¥{{item.prev_price|pri}}</span>
						</div>
					</td>
				</tr>
				<!--倒计时-->
				<tr>
					<td colspan="2"
						class="time-counter-wrap"
						style="border-top:1px solid #d60934;background-color:white;background-size: cover;color:#d60934;font-size:14px;">
						<aspect :ratio="0.1">
							<v-center :css="{width: '100%', height: '100%'}">
								<div class="count-down-display" v-if="step!= 2">
									距{{data.name}}{{ step == 0 ? '开始' : '结束'}} 
									<count-num :num="day||0"/>天<countNum :num="hours||0"/>小时<countNum :num="minutes||0"/>分<count-num :num="seconds||0"/>秒
								</div>
								<div class="" v-else>
									活动已结束
								</div>
							</v-center>
						</aspect>
					</td>
				</tr>
			</table>
		</goods-link>
	</div>
</div>`;


let style =`
.${name} .count-num{
    background-color: transparent;
	color: red;
	padding:0;
}`;
	return {
		template,
		style,
	}
}