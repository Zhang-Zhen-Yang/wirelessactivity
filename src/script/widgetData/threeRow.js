
export default function(name) {
let template = `
<div class="${name}">
	<widget-header :title="data.title" :link="data.link" :css="{backgroundColor: 'transparent',color: 'white'}"></widget-header>
	<empty-layout v-if="data.list.length == 0" />
	<table class="three-row" cellspacing="0" cellpadding="0" style="width:100%;table-layout:fixed;">
		<!-- get3ColArray 是宝贝列表数组 每一个是有 1~3 个 宝贝 -->
		<tr v-for="item,index in get3ColArray">
		<td v-for="i in item" style="width: 33.333%;padding: 2.5px;">
			<goods-link :numIid="item[0].num_iid">
				<div class="three-row-item" style="width: 100%;position: relative;overflow: hidden;border-radius: 0 0 5px 5px;">
					<aspect :css="{overflow: 'hidden'}">
						<img :src="i.pic_url" alt="" style="verical-align:middle;width:100%;">
					</aspect>
					<div class="" v-if="data.show_title" style="text-align: center; background-color:#d60934">
						<span class="goods-price" style="color: white;font-size:12px;line-height:2em;">¥{{ i.price }}</span>
					</div>
				</div>
			</goods-link>
		</td>
		<td v-if="!item[1]"></td>
		<td v-if="!item[2]"></td>
		</tr>
	</table>
</div>`;


let style =`
.${name} {
}
`;
	return {
		template,
		style,
	}
}