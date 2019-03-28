/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:26:47 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:26:47 
 */

// 官方优惠券
<template>
  <div class="coupon-promotion">
    <div v-for="item, index in list" class="coupon-item" v-if="data.lastAction=='success'">
      <div :class="['pointer', 'relative', ids.indexOf(item.couponId) > -1 ? 'coupon-selected' : 'coupon-inselected']" @click="toggleCoupon(item)">
        <table>
          <tr>
            <td style="font-size: 32px;">
              <span class="font16">¥</span>{{ item.denominations }}
            </td>
            <td class="right font14">
            </td>
          </tr>
          <tr>
            <td colspan="2">
              使用条件：{{`满${item.condition}元` }}
            </td>
          </tr>
          <tr>
            <td colspan="2">
              有效时间：{{ item.creatTime }}~{{ item.endTime }}
            </td>
          </tr>
        </table>
        
      </div>
       <!--{{ item }}-->
    </div>
    <!-- <img src="http://imgs.aixifan.com/o_tgseit1c1muh1fsoob811eq2ep.jpg" alt="">-->
    <content-notice :lastAction="data.lastAction" :count="data.count" :msg="data.msg"></content-notice>
  </div>
</template>

<script>
export default {
  name: 'coupon-promotion',
  components: { },
  data () {
    return {
    }
  },
  computed: {
    data() {
      return this.$store.state.coupon.tabPromotion;
    },
    list() {
      return this.data.list
    },
    checkedIcon() {
      return `${window.assets}checked.svg`
    },
    itemData() {
      return  this.$store.state.coupon.itemData;
    },
    ids() {
      return this.itemData.list.map((item)=>{
        return item.id || item.couponId;
      })
      return ['dd','dd']
    },

  },
  methods: {
    init() {
      this.$store.dispatch('getPromotionCoupon')
    },
    toggleCoupon(item) {
      if(this.ids.indexOf(item.couponId) > -1) {
        this.itemData.list = this.itemData.list.filter((i)=>{
          return (i.couponId != item.couponId );
        })
      } else {
        console.log(JSON.stringify(item));
        this.itemData.list.push({
          ...item,
          from: 'promotion',
        })

      }

    }
  },
  created() {
    // this.init();
    if(this.lastAction == 'error' || this.list.length == 0) {
      this.init();
    }
  }
}
</script>

<style lang="scss">
  .coupon-promotion{
    .coupon-item>div{
      background-color: transparent;
      background-image: url(http://2015.wonbao.net/images/marketing/coupon.png);
      // background-size: 100% auto;
      padding-left: 10px;
    }
  }
</style>
