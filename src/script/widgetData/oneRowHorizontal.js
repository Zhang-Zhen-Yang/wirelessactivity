
export default function(name) {
let template = `
<div class="${name}">
	<widget-header :title="data.title" :link="data.link" :css="{backgroundColor: 'transparent',color: 'white'}"></widget-header>
    <empty-layout v-if="data.list.length == 0" />
    <goods-link v-for="item,index in data.list" :numIid="item.num_iid" :key="index">
        <div class="" style="background-color: #d60934;margin-bottom: 2px;">
            <table>
                <tr>
                    <td v-if="index % 2 == 1" class="title-block" height="35%">
                        <!--宝贝标题-->
                        <span v-if="data.show_title" style="color: white;font-size: 14px;">
                            {{ item.title }}
                        </span>
                    </td>
                    <td width="50%" rowspan="3">
                        <img :src="item.pic_url" alt="" style="width: 100%;vertical-align: middle">
                    </td>
                    <td v-if="index % 2 == 0" class="title-block" height="35%">
                        <!--宝贝标题-->
                        <span v-if="data.show_title" style="color:white;font-size: 14px;">
                            {{ item.title }}
                        </span>
                    </td>
        
                </tr>
                <!--宝贝图片-->
                <tr>
                    <td style="padding-left:10px;color:white;">
                        <span style="font-size:20px;">
                            ¥{{ item.price|pri }} 
                        </span>
                        <span
                            v-if="data.show_prev_price"
                            style="font-size: 12px;text-decoration: line-through;margin-left: 5px;"
                        >
                            ¥{{ item.prev_price|pri }} 
                        </span>
                    </td>
                </tr>
                <tr>
                    <td> 
                        <div style="background-color:orange;color:white;padding: 5px 0;text-align:center;">
                            立即购买
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </goods-link>
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