/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-27 15:34:47 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-10-31 16:33:21
 */

// 类目链接
<template>
  <div class="link-category">
    <!-- {{ sellerCats }} -->
    <table cellspacing="0" cellpadding="0" style="width: 100%;">
      <tr v-for="item, index in sellerCats">
        <td>
          <a :href="link(item.id)" target="_blank" v-html="name(item.name)"></a>
        </td>
        <td class="right">
          <span @click="select(item.id)" class="pointer color-primary">选择链接</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'link-cagetory',
  data () {
    return {
     
    }
  },
  computed: {
    sellerCats() {
      return this.$store.state.dialogGoods.sellerCats;
    }
  },
  methods: {
    link(id){
      // return `https://shop${window.user.shopId}.taobao.com/category-${id == 'all' ? '' : id}.htm`;
      let trueId = id.split(',')[0]
      return `http://shop${window.user.shopId}.m.taobao.com/?catId=${id == 'all' ? '' : trueId}#list`
    },
    select(id) {
      // alert(id);
      this.$emit('select',this.link(id));
    },
    name(name) {
      return name.replace('└', '——');
    }
  },
  created() {
    if(this.sellerCats.length == 0) {
      this.$store.dispatch('getSellerCats');
    }
  }
}
</script>

<style lang="scss">
  .link-category{
    table{
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 14px;
      border: 1px solid #aaaaaa;
      td{
        padding: 15px 10px;
        border-top: 1px solid #aaaaaa;
      }
      tr:first-child td{
        border-top:none;
      }
    }
  }
</style>
