/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-27 15:35:00 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-10-30 14:44:28
 */

// 旺店宝优惠券
/*
case 'home':
        this.state.link = `https://shop${user.shopId}.taobao.com`;
        break;
      case 'favorite':
        this.state.link = `https://favorite.taobao.com/popup/add_collection.htm?id=${user.shopId}&itemtype=0&sellerid=${user.id}&scene=taobao_shop`;
        break;
      case 'category':
        this.state.link = `https://shop${user.shopId}.taobao.com/category-${cid}.htm`;
        break;
      default: break;


 */
<template>
  <div class="link-shop">
    
    <table cellspacing="0" cellpadding="0" style="width: 100%;">
      <tr v-for="item, index in list">
        <td>
            <a :href="item.link" :target="item.link == '#' ? '_self' : '_blank'">{{ item.name }}</a>
        </td>
        <td class="right">
          <span @click="select(item.link)" class="pointer color-primary">选择链接</span>
        </td>
      </tr>

    </table>
  </div>
</template>

<script>
export default {
  name: 'link-shop',
  components: {  },
  data () {
    return {
      list: [
        {
          name: `店铺首页`,
          link: `https://shop${window.user.shopId}.taobao.com`
        },
        {
          name: `店铺收藏`,
          link: `https://favorite.taobao.com/popup/add_collection.htm?id=${window.user.shopId}&itemtype=0`
        },
        /*{
          name: `回到顶部`,
          link: `#`
        },*/
      ]
    }
  },
  computed: {
  },
  methods: {
    init() {
      /// this.$store.dispatch('getPromotionMealPlan', {pageNo: 1})
    },
    select(link) {
      this.$emit('select', link);
    }
  },
  created() {
    /* if(this.lastAction == 'error' || this.list.length == 0) {
      this.init();
    }*/
  }
}
</script>

<style lang="scss">
  .link-shop{
    table{
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 14px;
      border: 1px solid #aaaaaa;
      td{
        padding:15px 10px;
        border-top: 1px solid #aaaaaa;
      }
      tr:first-child td{
        border-top:none;
      }
    }
  }
  
</style>
