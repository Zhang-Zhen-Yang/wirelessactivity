/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:27:03 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-12-dd 17:42:54
 */

<template>
  <modal-dialog @dismiss="dismiss(0)" @confirm="dismiss(0)" title="选择优惠券">
    <!-- subHeader-->
    <table slot="subHeader">
      <tr>
        <td class="left">
          <dialog-tab :tabs="['优惠券','官方优惠券']" :tabIndex="tabIndex" @setTabIndex="(index)=>{ tabIndex = index}"></dialog-tab>
        </td>
        <td class="right" style="width: 200px;">
        </td>
      </tr>
    </table>

    <!--content-->
    <div class="dialog-coupon-content-wrap" slot="content" >
      <!-- 加载成功 -->
      <div class="dialog-coupon-content scrollbar-overwrite" v-if="tabIndex == 0">
        <coupon-wb></coupon-wb>
      </div>
      <!-- 加载成功 1-->
      <div class="dialog-coupon-content scrollbar-overwrite" v-if="tabIndex == 1">
        <coupon-promotion></coupon-promotion>
      </div>


      <!--<content-notice :lastAction="tabIndex == 0 ?lastAction : promotionLastAction" :count="tabIndex == 0 ? goodslist.length : promotionGoodsList.length">
      </content-notice>-->
    </div>

    <!--footer-->
    <table slot="footer">
      <tr>
        <td class="left">
        
        </td>
        <td>
          <pagination v-if="tabIndex==0" :pageSize="pageSize" :pageNo="pageNo" :count="count" @goToPage="goToPage"></pagination>
        </td>
        <td class="right">
          <button class="btn primary" @click="confirm">完成</button>
        </td>
      </tr>
    </table>
  </modal-dialog>
</template>

<script>
import couponWb from './couponWb';
import couponPromotion from './couponPromotion';
export default {
  name: 'temp',
  components: { couponWb, couponPromotion },
  data () {
    return {
    }
  },
  computed: {
    md() {
      return this.$store.state.coupon;
    },
    
    tabIndex: {
      get() {
        return this.md.tabIndex;

      },
      set(index) {
        this.md.tabIndex = index;
      }
    },
    pageSize() {
      return this.md.tabWb.pageSize;
    },
    pageNo() {
      return this.md.tabWb.pageNo;
    },
    count() {
      return this.md.tabWb.count;
    }
  },
  methods: {
    dismiss(){
      this.md.show = false;
    },
    confirm() {
      this.dismiss();
    },
    
    goToPage(index) {
      this.$store.dispatch('getCoupons', { pageNo: index });
    },
  },
  created() {
  
  }
}
</script>

<style lang="scss">
  // content
  .dialog-coupon-content-wrap{
    width: 100%;
    height: 100%;
    padding-top: 90px;
    padding-bottom: 55px;
  }
  .dialog-coupon-content{
    height: 100%;
    overflow: auto;
    padding: 0 10px;
    text-align: left;
  }
  
</style>