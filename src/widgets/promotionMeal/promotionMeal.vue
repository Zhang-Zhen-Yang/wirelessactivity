/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:37:26 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-29 14:51:24
 */
// 搭配套餐
<template>
  <a-link :href="data.link">
    <div class="promotion-meal-wrap border-theme bg-block">
      <div v-if="data.title" class="promotion-meal-header">
        <span class="promotion-meal-n1">搭配套餐</span><span class="promotion-meal-n2">{{data.title}} (共{{data.list.length}}件)</span>
      </div>
      <div class="promotion-meal-content">
        <template class="promotion-meal" v-for="item,index in data.list">
          <img class="goods-pic" :src="item.pic_url" alt="">
          <span class="promotion-meal-join-icon" v-if="data.list[index+1]">+</span>
        </template>
        <empty-layout v-if="data.list.length == 0"></empty-layout>
      </div>
      
      <!--套餐价-->
      <div class="price-block border-theme">
        搭配价：<span class="price color-price">{{ data.meal_price | pri }}</span>
        <span class="prev-price color-prev-price">{{ data.total_price | pri}}</span>
      </div>
    </div>
  </a-link>
</template>

<script>
export default {
  name: 'promotion-meal',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'promotionMeal',
					list: [],
          title: '',
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
.promotion-meal-wrap{
  padding-top: 5px;
  // border: 1px solid orange;
  overflow: hidden;
  background-color: white;

  .promotion-meal-header{
    text-align: left;
    padding: 5px;
    background-color: white;
  }
  .promotion-meal-n1{
    font-size: 16px;
    color: #aaaaaa;
  }
  .promotion-meal-n2{
    font-size: 14px;
    margin-left:5px;
    color: #aaaaaa;
    
  }

  .promotion-meal-content{
    width: 100%;
    padding: 20px;
    white-space:nowrap;
    word-break:nowrap;
    overflow: auto;    
  }
  .promotion-meal-content::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    overflow: hidden;
  }


  img{
    vertical-align: bottom;

  }
  .goods-pic{
    width: 40%;
    vertical-align: middle;
  }
  .promotion-meal-join-icon{
    font-size: 40px;
    vertical-align: middle;
    color: #cccccc;
  }
  

  .price-block{
    border-top:1px solid orange;
    /*border-left: none;
    border-right: none;
    border-bottom: none;*/
    padding: 5px;
    text-align: left;
    position: relative;
    color: #aaaaaa;
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
