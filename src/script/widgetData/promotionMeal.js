
export default function(name) {
let template = `
<a-link :href="data.link">
	<div class="${name}" style="overflow: hidden;background-color: #d60934;">
		<div v-if="data.title" style="text-align: left;padding: 5px 0 5px 10px;background-color: white;">
		<span style="font-size: 16px;color: #111111;">搭配套餐</span>
		<span style="font-size: 14px;margin-left: 5px;color: #666666;">{{data.title}} (共{{data.list.length}}件)</span>
		</div>
		<div style="width: 100%;padding: 20px;white-space: nowrap;word-break: nowrap;overflow: auto;">
		<template class="promotion-meal" v-for="item,index in data.list">
			<!--宝贝图片-->
			<img :src="item.pic_url" alt="" style="vertical-align:middle; width: 30%;border:1px solid #a61001;">
			<!--加号-->
			<span class="promotion-meal-join-icon" style="font-size: 40px;vertical-align: middle;color: #a61001;" v-if="data.list[index+1]">+</span>
		</template>
		<empty-layout v-if="data.list.length == 0"></empty-layout>
		</div>
		
		<!--套餐价-->
		<div style="background-color:white;">
			<table cellspacing="0" cellpadding="0"  style="table-layout: fixed;width:100%;">
				<tr>
					<td style="color:#d60934;padding-left:10px;">
						<!--价格-->
						搭配价：<span style="font-size: 20px;">¥{{ data.meal_price | pri }}</span>
						<!--原价-->
						<span style="font-size: 14px;margin-left: 10px;text-decoration: line-through;">{{ data.total_price | pri}}</span>
					</td>
					<td style="background-color: orange;color:white;font-size:20px;text-align:center;vertical-align:middle;width:5em;line-height:2em;">
						立即购买
					</td>
				</tr>
			</table>
		</div>
	</div>
</a-link>`;


let style =`
.${name} .promotion-meal-content::-webkit-scrollbar {
	width: 10px;
	height: 10px;
	overflow: hidden;
}
`;
	return {
		template,
		style,
	}
}