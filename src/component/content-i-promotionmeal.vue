/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:30:02 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 10:09:42
 */

<template>
  <div class="content-item-promotionmeal">
    <div class="content-item-title">搭配套餐模块</div>
    <div class="content-item-wrap">
    <tab-setting>
        <!--1-->
        <div slot="first">
          <div class="content-item-sub-title">套餐显示名称</div>
          <w-input type="text" class="" v-model="itemData.title" placeholder="请输入套餐名称" />
          <p></p>
          <div class="content-item-sub-title">选择套餐</div>
          <mask-replace :text="'重新选择'" @select="select">
            <div class="i-promotion-meal-content" style="min-height: 100px;">
              <template v-for="item,index in itemData.list">
                <img class="goods-pic" :src="item.pic_url" alt="">
                <span class="promotion-meal-join-icon" v-if="itemData.list[index+1]">+</span>
              </template>
              <empty-layout v-if="itemData.list.length == 0" />
            </div>
          </mask-replace>
        </div>
        <!--2-->
        <div slot="second">
          <!--动态组件列表-->
          <dynamic-list type="promotionMeal" :itemData="itemData"></dynamic-list>
        </div>
      </tab-setting>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-item-promotionmeal',
  props: {
    itemData:{
      type: Object,
      default() {
        return {
          name: '',
          title: 'ddd',
          link:'ddddeeee',
          list: [
            {
              pic_url: 'ddd'
            }
          ]
        }
      }
    },
    activeIndex: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    select() {
      this.$store.state.promotionMeal.show = true;
      this.$store.state.promotionMeal.itemData = this.itemData;
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .i-promotion-meal-content{
    // white-space: nowrap;
    img{
      width: 140px;
      vertical-align: middle;
      margin-top: 10px;
    }
    span{
      vertical-align: middle;
      font-size: 30px;
      color: #1284e7;
    }
  }
</style>
