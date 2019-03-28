/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:37:58 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 15:29:35
 */
// 两列宝贝
<template>
  <div class="two-row-wrap bg-block">
    <widget-header :title="data.title" :link="data.link"></widget-header>
    <empty-layout v-if="data.list && data.list.length == 0" />
    <table class="two-row" cellspacing="0" cellpadding="0">
      <tr v-for="item,index in get2ColArray">
        <td v-for="i in item">
          <goods-link :numIid="i.num_iid">
            <div class="two-row-item border-theme" >
              <aspect>
                <img class="goods-pic" :src="i.pic_url" alt="">
              </aspect>
              <div class="goods-title" v-if="data.show_title">
                {{ i.title }}
              </div>
              <div class="price-block border-theme">
                <span class="price color-price">{{i.price | pri}}</span>
                <span class="prev-price color-prev-price" v-if="data.show_prev_price">{{i.prev_price | pri}}</span>
              </div>
            </div>
          </goods-link>
        </td>
        <td v-if="!item[1]"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'two-row',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'twoRow',
					list: [],
          title: '',
          link: '',
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
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    get2ColArray(list){
      const result = [];
      let tempList = [];
      this.data.list.forEach((item) => {
        tempList.push(item);
        if (tempList.length == 2) {
          result.push(tempList);
          tempList = [];
        }
      });
      if (tempList.length > 0) {
        result.push(tempList);
      }
      return result;
    },
  },
  methods: {

  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .two-row-wrap{
    background-color: white;
  }
  .two-row{
    width: 100%;
    table-layout: fixed;
    display: inline-block;
    img{
      vertical-align: bottom
    }
    td{
      width: 50%;
      padding:2.5px;
    }
    .two-row-item{
      width: 100%;
      overflow:hidden;
      border: 1px solid orange;
    }
    .goods-pic{
      width: 100%;
    }
    .goods-title{
      width:100%;
      /* white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
      padding: 5px;*/
      height: 2em;
      line-height: 2em;
      font-size: 14px;
      border-top: 1px solid orange;
      overflow: hidden;
      color: orange;
    }
    .price-block{
      border-top:1px solid orange;
      padding: 5px;
      text-align: left;
      position: relative;
    }
    .price{
      font-size: 16px;
      color: orange;
    }
    .price:before{
      content: '¥';
      font-size: 12px;
    }
    .prev-price{
      color: orange;
      font-size: 14px;
      margin-left:5px;
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
      font-size:12px;
    }
  }
  .two-row-table{
    width: 100%;
  }
</style>
