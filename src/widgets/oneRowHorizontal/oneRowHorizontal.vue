/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:37:15 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-29 14:25:26
 */
// 左右图文
<template>
  <div class="one-row-horizontal-wrap">
    <widget-header :title="data.title" :link="data.link"></widget-header>
    <empty-layout v-if="data.list.length == 0" />
    <goods-link v-for="item,index in data.list" :numIid="item.num_iid" :key="index">
      <div class="one-row-horizontal border-theme border-theme-one-row-horizontal bg-block">
      <table>
        <tr>
          <td v-if="index % 2 == 1" class="title-block" height="35%">
            <span class="title color-title goods-title" v-if="data.show_title">
                {{ item.title }}
            </span>
          </td>
          <td width="50%" rowspan="3">
            <img class="goods-pic" :src="item.pic_url" alt="">
          </td>
          <td v-if="index % 2 == 0" class="title-block" height="35%">
            <span class="title color-title goods-title" v-if="data.show_title">
                {{ item.title }}
            </span>
          </td>

        </tr>
        <tr>
          <td class="price-block">
            <span class="price color-price">
                {{ item.price|pri }} 
            </span>
            <span class="pre-price color-prev-price" v-if="data.show_prev_price">
              ¥{{ item.prev_price|pri }} 
            </span>
          </td>
        </tr>
        <tr>
          <td class="buy-block"> 
            <div class="buy bg-theme">
            </div>
          </td>
        </tr>
      </table>
      </div>
    </goods-link>
  </div>
</template>

<script>
export default {
  name: 'one-row-horizontal',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'oneRowHorizontal',
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
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .one-row-horizontal-wrap{
    font-size: 14px;
    
  }
  .one-row-horizontal{
    // border:1px solid orange;
    background-color: white;
    margin-bottom:2px;
    img{
      vertical-align: bottom;
    }
    .details,.img-box{
      display: inline-block;
      width: 49%;
    }
    .goods-pic{
      width: 100%;
    }
    .details{
      height: 100%;
      vertical-align: top;
    }
    .title{
      height:4.5em;
      font-size:14px;
      line-height: 1.5em;
      overflow: hidden;
      display:inline-block;
    }
    .title-block{
      padding: 0 5px;
      text-align: left;
    }
    .price-block{
      text-align: left;  
    }
    .price-block{
      padding:0 5px;
    }
    .price{
      font-size: 14px;
      color: orange;
    }
    .price:before{
      content: '¥';
      font-size: 12px;
    }
    .pre-price{
      font-size: 12px;
      color:orange;
      text-decoration: line-through;
      margin-left: 5px;
    }
    .buy-block{
      text-align: center;
    }
    .buy{
      display: inline-block;
      width: 70%;
      height: 2em;
      // background-color: orange;
      position: relative;
    }
    .buy:after{
      content: '立即购买';
      display: inline-block;
      width: 100%;
      position: absolute;
      left:0;
      top:0;
      color: white;
      font-size: 14px;
      line-height: 2em;
    }
  }
</style>
