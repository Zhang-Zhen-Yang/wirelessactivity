
export default function(name) {
let template = `
<div class="${name}">
	<widget-header :title="data.title" :link="data.link" :css="{backgroundColor: 'transparent',color: 'white'}"></widget-header>
    <empty-layout v-if="data.list.length == 0" />
    <table cellspacing="0" cellpadding="0" style="width: 100%;table-layout: fixed;display: inline-block;">
        <tr v-for="item,index in [[{rowspan:2,index:0, verticalAlign: 'top',paddingRight: '5px'},{rowspan:1, index:1, verticalAlign: 'top'}], [{rowspan:1,index:2, verticalAlign: 'bottom'}]]">
            <td v-for="i, subIndex in item"
                :rowspan="i.rowspan"
                :style="{width: index==0 && subIndex==0 ? '68%' : 'auto',verticalAlign: i.verticalAlign, paddingRight: i.paddingRight || 0}"
            >
                <goods-link  v-if="data.list[i.index]" :numIid="data.list[i.index].num_iid">
                    <div class="" v-if="data.list[i.index]" style="position:relative;">
                        <img class="" :src="data.list[i.index].pic_url" alt="" style="vertical-align:middle;width:100%;">
                        <div class="" v-if="data.show_title"
                            style="position: absolute;font-size:14px;width:100%;left:0;bottom:0;white-space: nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#d60934;color: white;line-height:2em;padding-left:5px;"
                        >
                            <span>{{ data.list[i.index].title }}</span>
                        </div>
                    </div>
                </goods-link>
            </td>
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