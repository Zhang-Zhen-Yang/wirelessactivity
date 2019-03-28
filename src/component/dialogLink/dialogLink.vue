/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-27 14:47:04 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2019-03-18 10:01:29
 */

<template>
  <modal-dialog @dismiss="dismiss(0)" @confirm="dismiss(0)" title="选择链接" sty="width: 800px;height:550px;">
    <!-- subHeader-->
    <table slot="subHeader" styl="width: 100%;">
      <tr>
        <td class="left">
          <dialog-tab :tabs="['店铺链接','分类链接','宝贝链接']" :tabIndex="tabIndex" @setTabIndex="(index)=>{ tabIndex = index}"></dialog-tab>
        </td>
        <td class="right">
        </td>
      </tr>
    </table>
    
    <!--content-->
    <div class="dialog-link-content-wrap" slot="content"  v-if="tabIndex != 2">
      <!-- 加载成功 -->
      <div class="dialog-link-content scrollbar-overwrite" v-if="tabIndex == 0">
        <linkShop @select="select"></linkShop>
      </div>
      <!-- 加载成功 1-->
      <div class="dialog-link-content scrollbar-overwrite" v-if="tabIndex == 1">
        <link-category @select="select"></link-category>
      </div>

      
    </div>
    <!--content-->
    <div class="dialog-link-content-wrap" slot="content"  v-if="tabIndex == 2" style="padding-bottom: 100px;">
      <link-gooda-action-bar v-if="tabIndex==2"></link-gooda-action-bar>
      <div class="dialog-link-content scrollbar-overwrite">
        <link-goods @select="select"></link-goods>
      </div>
    </div>


    <!--footer-->
    <table slot="footer">
      <tr>
        <td class="left" style="width: 100px;">
        
        </td>
        <td>
          <pagination v-if="tabIndex==2" :pageSize="md.tabGoods.pageSize" :pageNo="md.tabGoods.pageNo" :count="md.tabGoods.count" @goToPage="goToPage"></pagination>
        </td>
        <td class="right" style="width: 100px;">
          <button class="btn primary" @click="confirm">取消</button>
        </td>
      </tr>
    </table>
  </modal-dialog>
</template>

<script>
import linkShop from './linkShop';
import linkCategory from './linkCategory';
import linkGoods from './linkGoods';
import linkGoodaActionBar from './linkGoodsActionBar';
// import couponPromotion from './couponPromotion';
export default {
  name: 'dialog-link',
  components: { linkShop, linkCategory, linkGoods, linkGoodaActionBar},
  data () {
    return {
    }
  },
  computed: {
    md() {
      return this.$store.state.link;
    },
    
    tabIndex: {
      get() {
        return this.md.tabIndex;

      },
      set(index) {
        this.md.tabIndex = index;
      }
    },
  },
  methods: {
    dismiss(){
      this.md.show = false;
    },
    confirm() {
      this.dismiss();
    },
    select(link) {
      // alert(link);
      // console.log(JSON.stringify(this.md.itemData));
      // console.log(this.md.itemIndex);
      // console.log(this.md.key)
      if(this.md.key) {
        // alert(this.md.itemData[this.md.key]);
        // this.md.itemData[this.md.key] = link;
        this.$set(this.md.itemData, this.md.key, link)
      } else {
        // alert('dd');
        // 2019 3 18 如果json中无link属性，无法及时显示在input里
        this.$set(this.md.itemData.list[this.md.itemIndex], 'link', link);
        // this.md.itemData.list[this.md.itemIndex].link = link;
      }
      this.dismiss();
    },
    goToPage(pageNo){
      this.$store.dispatch('fetchLinkGoods', {pageNo});
    }
  },
  created() {
  
  }
}
</script>

<style lang="scss">
  // content
  .dialog-link-content-wrap{
    width: 100%;
    height: 100%;
    padding-top: 90px;
    padding-bottom: 55px;
  }
  .dialog-link-content{
    height: 100%;
    overflow: auto;
    padding: 0 10px;
    text-align: left;
  }
  
</style>