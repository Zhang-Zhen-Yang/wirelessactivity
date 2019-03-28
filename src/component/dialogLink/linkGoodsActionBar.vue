/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-27 16:51:08 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-10-27 17:24:12
 */

<template>
  <div class="link-goods-action-bar">
    <table>
      <tr>
        <td class="left" style="white-space:nowrap;padding-left: 13px;">

          <!-- 出售中，仓库中 -->
          <Dropdown :data="typeData" :width="100" :cbCustomSelectedText="typeValue" :cbChanged="typeChange"></Dropdown>
          <!-- 宝贝分类 -->
          <Dropdown  :data="sellerCats" :width="150" :cbCustomSelectedText="sellerCatValue" :cbChanged="sellerCatChange"></Dropdown>

        </td>
        <td class="right" style="padding-right: 25px;">
          <search-input :value="keyword" @search="search" placeholder="搜索：关键字、宝贝链接、商家编码"></search-input>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'link-goods-action-bar',
  data () {
    return {
      typeData: [
        {
          label: '出售中',
          value: 'onsale',
        },
        {
          label: '仓库中',
          value: 'instock',
        }
      ],
      typeMapData: {
        onsale: '出售中',
        instock: '仓库中'
      },
    }
  },
  computed: {
    md(){
      return this.$store.state.link.tabGoods;
    },
    type:{
      get(){
        return this.md.type;
      },
      set(type){
        this.md.type = type;
      }
    },
    
    sellerCats(){
      return this.$store.getters.sellerCats;
    },
    
    keyword:{
      get() {
        return this.md.keyword;
      }
    },
    cid:{
      get() {
        return this.md.cid;
      },
      set(cid) {
        this.md.cid = cid;
      }
    },

  },
  methods: {
    typeValue() {
      return this.typeMapData[this.type];
    },
    sellerCatValue() {
      let sellerCatLable = '';
      this.sellerCats.forEach((item, index)=>{
        // console.log([item.value, this.cid]);
        if(item.value == this.cid) {
          sellerCatLable = item.label;
        }
      });
      // alert(sellerCatLable);
      return sellerCatLable;
    },
    init() {
      this.$store.dispatch('fetchLinkGoods', {pageNo: 1});
    },
    typeChange(type) {
      this.type = type[0].value;
      this.init();
    },
    sellerCatChange(sellerCat) {
      let sellerCatId = sellerCat[0].value;
      this.cid = sellerCatId;
      // console.log(sellerCatId);
      this.init();
    },
        // 搜索
    search(value) {
      // alert(value);
      this.md.keyword = value;
      this.init();
    },
    goToPage(pageNo) {
      this.$store.dispatch('fetchLinkGoods', {pageNo});
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  .link-goods-action-bar{

  }
</style>
