/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:26:55 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-08 15:14:54
 */

// 旺店宝优惠券
<template>
  <div class="coupon-wb">
    <div v-for="item, index in list" class="coupon-item" v-if="lastAction=='success'">
      <div :class="['pointer', 'relative', ids.indexOf(item.id) > -1 ? 'coupon-selected' : 'coupon-inselected']" @click="toggleCoupon(item)">
        <table>
          <tr>
            <td style="font-size: 32px;">{{ item.type == 'Discount' ? `${item.discountRate}折` : (item.type == 'Price' ? `${item.decreaseMoney}元` : (item.type == 'FreePostage' ? '免邮' : '')) }}</td>
            <td class="right font14">{{item.name}}</td>
          </tr>
          <tr>
            <td colspan="2">
              使用条件：{{ item.totalPrice > 0 ? `满${item.totalPrice}元` : '无条件使用' }}
            </td>
          </tr>
          <tr>
            <td colspan="2">
              使用范围：限定商品 [ {{ itemCounts[`c${item.id}`] || 0 }} ]
            </td>
          </tr>
          <tr>
            <td colspan="2">
              有效时间：{{ item.startTime.time | datetime }}~{{ item.endTime.time | datetime }}
            </td>
          </tr>
        </table>
        <img class="absolute dialog-coupon-checked-icon" :src="checkedIcon" alt="" v-if="ids.indexOf(item.id) > -1">
      </div>
       <!--{{ item }}-->
    </div>

    <content-notice :lastAction="lastAction" :count="count"></content-notice>
    <!-- <img src="http://imgs.aixifan.com/content/2018_10_23/1.5402501695298846E9.png" alt="">
    <img src="http://imgs.aixifan.com/content/2018_10_23/1.5402501810002608E9.png" alt="">-->
  </div>
</template>

<script>
export default {
  name: 'coupon-wb',
  components: {  },
  data () {
    return {
    }
  },
  computed: {
    data() {
      return this.$store.state.coupon.tabWb;
    },
    itemData() {
      return this.$store.state.coupon.itemData;
    },
    ids() {
      return this.itemData.list.map((item)=>{
        return item.id;
      })
    },
    list() {
      return this.data.list;
    },
    lastAction() {
      return this.data.lastAction;
    },
    count() {
      return this.data.count;
    },
    // 限定商品
    itemCounts() {
      return this.data.itemCounts;
    },
    checkedIcon() {
      return `${window.assets}checked.svg`
    },
  },
  methods: {
    init() {
      this.$store.dispatch('getCoupons', {pageNo: 1})
    },

    toggleCoupon(item) {
      if(this.ids.indexOf(item.id) > -1) {
        this.itemData.list = this.itemData.list.filter((i)=>{
          return i.id != item.id;
        })
      } else {
        console.log(JSON.stringify(item));
        const {id, name, type, decreaseMoney, discountRate, totalPrice, startTime, endTime} = item;
        if(this.itemData.list.length < 3) {
          this.itemData.list.push({
            id,
            name,
            type,
            decreaseMoney,
            discountRate,
            totalPrice,
            startTime,
            endTime,
            from: 'wb',
            link: `https://wonbao.ews.m.jaeapp.com/mjsCoupon/index?couponId=${item.id}&userId=${window.user.id}`
          })
        } else {
          alert('已达到最大优惠券数');
        }

      }

    }
  },
  created() {
    if(this.lastAction == 'error' || this.list.length == 0) {
      this.init();
    }
  }
}
</script>

<style lang="scss">
  .coupon-item{
    display: inline-block;
    width: 33.3%;
    padding: 5px 5px;
    &>div{
      background-color: orange;
      color: white;
      font-size: 12px;
      border-radius: 5px;
    }
    table{
    }
    td{
      padding: 3px;
    }
    .coupon-inselected{
      overflow: hidden;
    }
    .coupon-selected{
      overflow: hidden;
      & .dialog-coupon-checked-icon{
        display: block;
      }
    }
    .dialog-coupon-checked-icon{
      display: none;
      position: absolute;
      right: -1px;
      bottom: -1px;
      width: 50px;
    }
  }
</style>
