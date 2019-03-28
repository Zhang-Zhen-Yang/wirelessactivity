
export default function(name) {
let template = `
<div class="${name}" style="">
	<marquee-block-wrap :data="data" :speed="3">
	<widget-header slot="top" :title="data.title" :link="data.link" :css="{backgroundColor: 'transparent',color: 'white'}"></widget-header>
	<template v-for="slot in ['one', 'two']">
		<goods-link v-for="item,index in data.list" :numIid="item.num_iid" :slot="slot" :key="index">
			<div style="width: 100px;display:inline-block;marginLeft: 10px;" >
				<aspect>
					<!--要定义的内容从这里开始-->
					<div :style="{width: '100%', height: '100%', backgroundImage: 'url('+ item.pic_url+')', backgroundSize: 'contain',border:'1px solid #d60934'} ">
						<table style="width:100%;position: absolute;bottom:0">
							<tr>
								<td style="text-align:center;">
									<div style="display:inline-block;color:white;background-color:#d60934;font-size:12px;border-radius:5px;padding:0 10px;line-height:2em;">¥{{ item.price }}</div>
								</td>
							</tr>
						</table>
					</div>
				</aspect>
			</div>
		</goods-link>
	</template>
	</marquee-block-wrap>
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