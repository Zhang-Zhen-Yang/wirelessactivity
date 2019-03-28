
export default function(name) {
let template = `
<div class="${name}">
	<table cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td v-for="item,index in data.list">
                <!--如果是旺店宝优惠券-->
                <a-link v-if="item.from == 'wb'" :href="item.link">
                    <div class="coupon-list-item" >
                        <div class="coupon-price">{{ item.type == 'Discount' ? (item.discountRate+'折') : (item.type == 'Price' ? (item.decreaseMoney+'元') : (item.type == 'FreePostage' ? '免邮' : '')) }}</div>
                        <div class="coupon-details">{{ item.totalPrice > 0 ? ('满'+item.totalPrice+'元') : '无条件' }}使用</div>
                    </div>
                </a-link>
                <!--如果是官方优惠券-->
                <a-link v-if="item.from == 'promotion'" :href="item.activityUrl">
                    <div class="coupon-list-item">
                        <div class="coupon-price">{{ item.denominations }}</div>
                        <div class="coupon-details">{{ '满'+ item.condition +'元' }}使用</div>
                    </div>
                </a-link>
            </td>
        </tr>
    </table>
    <div v-if="data.list.length == 0" class="coupon-null-notice">
        无优惠券
    </div>
</div>
`;


let style =`
.${name} table {
    width: 100%;
}
.${name} td {
    width: 33.3%;
    text-align: center;
    position: relative;
}
.${name} td:first-child {
    text-align: left;
}
.${name} td:last-child {
    text-align: right;
}
/* 第一张优惠券*/
.${name} td:nth-child(1) {
    color: #fe8214;
}
.${name} td:nth-child(1) .coupon-list-item:after{
    background-color: #fe8214;
}
/*第二张优惠券*/
.${name} td:nth-child(2) {
    color: #fc21ff;
}
.${name} td:nth-child(2) .coupon-list-item:after{
    background-color: #fc21ff;
}
/*第三张优惠券*/
.${name} td:nth-child(3) {
    color: #fe3360;
}
.${name} td:nth-child(3) .coupon-list-item:after{
    background-color: #fe3360;
}

.${name} .coupon-list-item {
    display: inline-block;
    width: 98%;
    position: relative;
    padding: 3px;
    text-align: left;
    background-color: white;
}
.${name} .coupon-list-item:after {
    content: '点击领取';
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0;
    color: white;
    height: 100%;
    width: 2.5em;
    font-size: 12px;
    text-align: center;
    padding: 3px;
    padding-top: 5px;
    box-sizing: border-box;
}

.${name} .coupon-price {
    font-size: 20px;
}
.${name} .coupon-details {
    font-size: 12px;
}
.${name} .coupon-null-notice {
    text-align: center;
    padding: 10px;
    background-color: #ededed;
}`;
	return {
		template,
		style,
	}
}