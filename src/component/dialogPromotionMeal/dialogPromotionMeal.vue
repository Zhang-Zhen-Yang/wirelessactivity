/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:28:31 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-06 14:06:42
 */

<template>
  <modal-dialog @dismiss="dismiss(0)" @confirm="dismiss(0)" title="选择搭配套餐">
    <!-- subHeader-->
    <table slot="subHeader" v-if="false" style="width: 100%;">
      <tr>
        <td class="left">
          <dialog-tab :tabs="['搭配套餐','官方搭配套餐']" :tabIndex="tabIndex" @setTabIndex="(index)=>{ tabIndex = index}"></dialog-tab>
        </td>
        <td class="right">
        </td>
      </tr>
    </table>

    <!--content-->
    <div class="dialog-promotion-content-wrap" slot="content" >
      <!-- 加载成功 -->
      <div class="dialog-promotion-content scrollbar-overwrite" v-if="tabIndex == 0">
        <promotionMealWb></promotionMealWb>
      </div>
      
      <!-- 加载成功 1-->
      <div class="dialog-promotion-content scrollbar-overwrite" v-if="tabIndex == 1">
        <!--coupon-promotion></coupon-promotion>-->
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
          <!-- <pagination v-if="tabIndex==0" :pageSize="pageSize" :pageNo="pageNo" :count="count" @goToPage="goToPage"></pagination>-->
        </td>
        <td class="right">
          <button class="btn primary" @click="confirm">取消</button>
        </td>
      </tr>
    </table>
  </modal-dialog>
</template>

<script>
import promotionMealWb from './promotionMealWb';
// import couponPromotion from './couponPromotion';
export default {
  name: 'temp',
  components: { promotionMealWb },
  data () {
    return {
    }
  },
  computed: {
    md() {
      return this.$store.state.promotionMeal;
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
      this.$store.dispatch('getPromotionMealPlan', { pageNo: index });
    },
  },
  created() {
  
  }
}
</script>

<style lang="scss">
  // content
  .dialog-promotion-content-wrap{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 55px;
  }
  .dialog-promotion-content{
    height: 100%;
    overflow: auto;
    padding: 0 10px;
    text-align: left;
  }
  
</style>