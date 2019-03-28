/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-27 15:34:52 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-10-31 09:31:01
 */

// 类目链接
<template>
  <div class="link-goods">
    <div>
      <div class="link-goods-table-wrap" v-if="lastAction == 'success' && goodslist.length > 0">
        <table cellspacing="0" cellpadding="0" style="width: 100%;">
          <template v-for="item, index in goodslist">
            <tr>
              <td rowspan="2" width="100" class="td">
                <img :src="item.pic_url" alt="" class="link-goods-image middle">
              </td>
              <td class="top td">
                <a :href="link(item.num_iid)" target="_blank">
                  {{ item.title }}
                </a>
              </td>
              <td rowspan="2" width="100" class="td">
                <span class="color-primary pointer" @click="select(item.num_iid)">选择链接</span>
              </td>
            </tr>
            <tr>
              <td class="bottom color-tb font16">¥{{item.price}}</td>
            </tr>
          </template>
        </table>
      </div>
      <content-notice :lastAction="lastAction" :count="count"></content-notice>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'link-goods',
  components: { },
  data () {
    return {
     
    }
  },
  computed: {
    md() {
      return this.$store.state.link.tabGoods;
    },
    lastAction() {
      return this.md.lastAction;
    },
    goodslist() {
      return this.md.list;
    },
    count() {
      return this.md.count;
    },
    sellerCats(){
      return this.$store.state.dialogGoods.sellerCats.map((item,index)=>{
        return {
          label: item.name,
          value: item.id,
        }
      })
    },
    
  },
  methods: {
    init() {
      this.$store.dispatch('fetchLinkGoods', {pageNo: 1});
    },
    link(num_iid) {
      return `http://h5.m.taobao.com/awp/core/detail.htm?id=${num_iid}`;
    },
    select(num_iid){
      this.$emit('select', this.link(num_iid));
    }
  },
  created() {
    if(this.lastAction == 'error' || (this.goodslist.length == 0)) {
      this.init();
    }
    if(this.sellerCats.length == 0) {
      this.$store.dispatch('getSellerCats');
    }
  }
}
</script>

<style lang="scss">
  .link-goods{
    .td{
      border-top: 1px solid #aaaaaa;
    }
    td{
      padding:5px;
    }
    table{
      font-size: 14px;
      table-layout:fiexed;
    }
    .link-goods-image{
      width: 80px;
      height: 80px;
    }
    .link-goods-table-wrap{
      border-bottom: 1px solid #aaaaaa;
      margin:10px 0;
    }

  }
</style>
