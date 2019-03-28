/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:37:09 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-29 14:16:11
 */
// 单列宝贝
<template>
  <div class="one-row-wrap">
    <widget-header :title="data.title" :link="data.link"></widget-header>
    <empty-layout v-if="data.list && data.list.length == 0" />
    <div class="one-row border-theme bg-block" v-for="item,index in data.list" :key="index">
      <goods-link :numIid="item.num_iid" >
        <img class="goods-pic" :src="item.pic_url" alt="">
        <div class="goods-title border-theme" v-if="data.show_title">
          {{ item.title }}
        </div>
        <div class="price-block border-theme">
          <span class="price color-price">{{item.price | pri}}</span>
          <span class="prev-price color-prev-price" v-if="data.show_prev_price">{{item.prev_price | pri}}</span>
        </div>
      </goods-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'one-row',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'oneRow',
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {

  },
  methods: {

  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .one-row-wrap{
    // padding-top: 5px;
    margin-bottom: 5px;
  }
  .one-row-wrap:last-child{
    margin-bottom: 0;
  }
  .one-row:last-child{
    margin-bottom: 0px;
  }
  .one-row{
    background-color: white;
    border: 1px solid orange;
    margin-bottom: 5px;
    img{
      vertical-align: bottom;
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
      padding: 5px;
      color: orange;
    }
    .price-block{
      border-top:1px solid orange;
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
    .price-block:after{
      content: '购买';
      display: block;
      position: absolute;
      top:0;
      right: 0;
      bottom:0;
      width: 4em;
      height: 100%;
      text-align: center;
      line-height: 35px;
      background-color: orange;
      color: white;
    }
  }
</style>
