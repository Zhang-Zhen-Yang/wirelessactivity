/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:36:57 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 11:53:18
 */
// 爆款推荐
<template>
  <div class="hot-item-wrap bg-block">
    <div class="hot-item border-theme" v-for="item,index in data.list" :key="index">
      <goods-link :numIid="item.num_iid">
        <img class="goods-pic" :src="item.pic_url" alt="" v-if="item.pic_url">
        <empty-layout v-if="!item.pic_url"></empty-layout>
        <table cellspacing="0" cellpadding="0">
          <tr>
            <td class="goods-title border-theme" style="width: 50%;">
              {{ item.title }}
            </td>
            <td>
              <div class="price-block border-theme">
                <span class="price color-price">{{item.price|pri}}</span>
                <span class="prev-price color-prev-price">{{item.prev_price|pri}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="time-counter-wrap border-theme">
              <count-down :data="data" :global="global"></count-down>
            </td>
          </tr>
        </table>
      </goods-link>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'hot-item',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'hotItem',
					list: [],
        }
      }
    },
    global: {
      type: Object,
      default() {
        return {};
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
  .hot-item-wrap{
    // padding-top: 5px;
    .hot-item{
      background-color: white;
      border:1px solid orange;
      // margin-bottom: 5px;
      img{
        vertical-align: middle;
      }
      .goods-pic{
        width: 100%;
      }
      .goods-title{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        border-top: 1px solid orange;
        /*border-left: none;
        border-right: none;
        border-bottom: none;*/
        padding: 5px;
        color: orange;
      }
      .price-block{
        border-top:1px solid orange;
        border-left:1px solid orange;
        /* border-right: none;
        border-bottom: none;*/
        padding: 5px;
        text-align: left;
        position: relative;
      }
      .price{
        font-size: 20px;
        color: orange;
      }
      .price:before{
        content: '¥';
        font-size: 14px;
      }
      .prev-price{
        color: orange;
        font-size: 14px;
        margin-left:10px;
        text-decoration: line-through;
      }
      .time-counter-wrap{
        border-top: 1px solid orange;
        color: orange;
        /* border-left: none;
        border-right: none;
        border-bottom: none;*/
        .count-num{
          background-color: orange;
        }
      }
    table{
      width: 100%;
      table-layout: fixed;
    }
  }
  
  }
</style>
