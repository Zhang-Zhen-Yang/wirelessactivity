
export default function(name) {
let template = `
<div class="${name}">
	<tab-temp :data="data" :index="index">
	<table cellspacing="0" cellpadding="0" class="tab-header" style="width:100%;">
		<tr>
			<td v-for="item,index in data.list" :style="{width: 100 / data.list.length+'%', fontSize: '14px', textAlign:'center',lineHeight: '3em',backgroundColor: data.activeIndex == index? '#fea200' : '#d60934', borderRight: (index + 1) < data.list.length ? '1px solid #a61001' : 'none'}"  @click="data.activeIndex=index">
				<div>
					<div class="tab-item-title" style="color: white;">
						{{ item.title }}
					</div>
				</div>
			</td>
		</tr>
	</table>
	</tab-temp>
</div>`;


let style =`
.${name}{
}`;
	return {
		template,
		style,
	}
}