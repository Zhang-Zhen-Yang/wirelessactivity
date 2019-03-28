
export default function(name) {
let template = `
<div class="${name}">
	<!--头部-->
	<widget-header :title="data.title" :link="data.link" :css="{backgroundColor: 'transparent', color: 'white'}"></widget-header>
	<empty-layout v-if="data.list && data.list.length == 0" />
	<table cellspacing="0" cellpadding="0" v-for="item,index in data.list" style="width: 100%;table-layout: fixed;">
		<tr>
			<td :style="{padding: (index + 1) < data.list.length ? '2.5px 0 15px 0' : '2.5px 0 2.5px 0'}">
				<goods-link :numIid="item.num_iid">
					<div style=" width: 100%;overflow: hidden;">
						<aspect :css="{overflow: 'hidden'}">
							<img :src="item.pic_url" alt="" style="width:100%; vertical-align: middle;">
						</aspect>
						<!--宝贝名称-->
						<div v-if="data.show_title" style="width: 100%;height: 2em;line-height: 2em;padding:0 5px;font-size: 14px;overflow: hidden;background-color:#d60934;color: white;">
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
				</goods-link>
			</td>
		</tr>
	</table>
</div>`;


let style =`
.${name}{
}
`;
	return {
		template,
		style,
	}
}