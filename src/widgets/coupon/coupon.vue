/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:35:54 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-29 14:55:29
 */
// 优惠券
<template>
  <div class="coupon color-theme">
    <table cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td v-for="item,index in data.list">
          <a-link v-if="item.from == 'wb'" :href="item.link">
            <div class="coupon-list-item border-theme" >
              <div class="coupon-price">{{ item.type == 'Discount' ? `${item.discountRate}折` : (item.type == 'Price' ? `${item.decreaseMoney}元` : (item.type == 'FreePostage' ? '免邮' : '')) }}</div>
              <div class="coupon-details">{{ item.totalPrice > 0 ? `满${item.totalPrice}元` : '无条件' }}使用</div>
            </div>
          </a-link>
          <a-link v-if="item.from == 'promotion'" :href="item.activityUrl">
            <div class="coupon-list-item border-theme">
              <div class="coupon-price">{{ item.denominations }}</div>
              <div class="coupon-details">{{ `满${item.condition}元` }}使用</div>
            </div>
          </a-link>
        </td>
      </tr>
    </table>
    <div v-if="data.list.length == 0" class="coupon-null-notice">
      无优惠券
    </div>
  </div>
</template>

<script>
export default {
  name: 'coupon',
  props: {
    data: {
      type: Object,
      default() {
        return {
          type: 'coupon',
					list:[]
        }
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
  created() {
  }
}
</script>

<style lang="scss">
  .coupon{
    // color: orange;
    table{
      width: 100%;
    }
    td {
      width: 33.3%;
      text-align: center;
      position: relative;
    }
    td:first-child{
      text-align: left;
    }
    td:last-child{
      text-align: right;
    }
    .coupon-list-item{
      display: inline-block;
      // height: 100%;
      width: 98%;
      // border: 1px solid orange;
      position: relative;
      // overflow: hidden;
      padding: 3px;
      text-align: left;
      background-color: white;
      color: #aaaaaa;
    }
    .coupon-list-item:after{
      content: '点击领取';
      display: inline-block;
      position: absolute;
      right: 0;
      top: 0;
      background-color: orange;
      color: white;
      height: 100%;
      width: 2.5em;
      font-size: 12px;
      text-align: center;
      padding:3px;
      padding-top: 5px;
      box-sizing: border-box;
    }
    .coupon-price{
      font-size: 20px;
    }
    .coupon-price:before{
    }
    .coupon-details{
      font-size: 12px;
    }
    .coupon-null-notice{
      text-align: center;
      padding: 10px;
      background-color: #ededed;
    }

  }
</style>
