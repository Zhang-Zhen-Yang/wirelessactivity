
export default function(name) {
let template = `
<div class="${name}">
	<widget-header :title="data.title" :link="data.link" :css="{backgroundColor: 'transparent',color: 'white'}"></widget-header>
    <table style="width:100%;table-layout: fixed;" class="waterfall-table" cellspacing="0" cellpadding="0">
        <tr >
            <!--左侧-->
            <td style="vertical-align: top;" v-for="td, tdIndex in [0,1]">
                <div class="left-column" :style="{padding: tdIndex == 0 ? '0 2px 0 0' : '0 0 0 2px'}">
                    <div v-if="tdIndex == 0 && data.leftTop.pic_url" style="margin-bottom: 5px;">
                        <a-link :href="data.leftTop.link">
                            <img :src="data.leftTop.pic_url" alt="" style="max-width:100%;max-height:100%;vertical-align:middle;">
                        </a-link>
                    </div>
                    <div v-for="item,index in data.list" v-if="index % 2 == td" class="" style="margin-bottom:5px;">
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
                                            <td style="color:#d60934;padding-left:5px;white-space:nowrap;">
                                                <!--价格-->
                                                <span style="font-size: 12px">¥</span><span style="font-size: 16px;">{{item.price | pri}}</span>
                                                <!--原价-->
                                                <span v-if="data.show_prev_price" style="font-size: 14px;margin-left: 5px;text-decoration: line-through;">¥{{item.prev_price | pri}}</span>
                                            </td>
                                            <td style="background-color:orange;vertical-align:middle;text-align:center;width:2.5em;line-height:1.8em;">
                                                <span style="color: white;">
                                                    购买
                                                </span>
                                            </td>
                                        </tr>
        
                                    </table>
                                </div>
                            </div>
                        </goods-link>
                    </div>
                    <empty-layout v-if="data.list.length==0"></empty-layout>
                    <div class="waterfall-item" v-if="tdIndex == 1 && data.rightBottom.pic_url">
                        <a-link :href="data.rightBottom.link">
                            <img :src="data.rightBottom.pic_url" alt="" style="max-width:100%;max-height:100%;vertical-align:middle">
                        </a-link>
                    </div>
                </div>
            </td>
        </tr>
    </table>
</div>`;


let style =`
.${name}{
}`;
	return {
		template,
		style,
	}
}