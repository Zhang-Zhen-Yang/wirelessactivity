
export default function(name) {
let template = `
<div class="${name}">
	<widget-header :title="data.title" :link="data.link" :css="{backgroundColor: 'transparent', color: 'white'}"></widget-header>
    <empty-layout v-if="data.list && data.list.length == 0" />
    <table class="two-row" cellspacing="0" cellpadding="0" style=" width: 100%;table-layout: fixed;display: inline-block;">
    <!-- get2ColArray 是宝贝列表数组 每一个是有 1~3 个 宝贝 -->
        <tr v-for="item,index in get2ColArray">
        <td v-for="i in item" style="width: 50%;padding: 2.5px;">
            <goods-link :numIid="i.num_iid">
            <div class="" style=" width: 100%;overflow: hidden;">
                <aspect :css="{overflow: 'hidden'}">
                    <img :src="i.pic_url" alt="" style="width:100%; vertical-align: middle;">
                </aspect>
                <!--宝贝名称-->
                <div v-if="data.show_title" style="width: 100%;height: 2em;line-height: 2em;padding:0 5px;font-size: 14px;overflow: hidden;background-color:#d60934;color: white;">
                    {{ i.title }}
                </div>
                <div class="" style="border-top: 1px solid #a61001;background-color:white;text-align: left; position: relative;">
                    <table cellpadding="0" cellspacing="0" style="width: 100%;table-layout:fixed;">
                        <tr>
                            <td style="color:#d60934;padding-left:5px;white-space:nowrap;">
                                <!--价格-->
                                <span style="font-size: 12px">¥</span><span class="" style="font-size: 16px;">{{item[0].price | pri}}</span>
                                <!--原价-->
                                <span class="" v-if="data.show_prev_price" style="font-size:12px;margin-left: 5px;text-decoration: line-through;">¥{{item[0].prev_price | pri}}</span>
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
        </td>
        <td v-if="!item[1]"></td>
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