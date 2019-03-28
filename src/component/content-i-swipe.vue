/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:30:11 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 10:09:47
 */

<template>
  <div class="temp">
    <div class="content-item-title">宝贝轮播模块</div>
    <div class="content-item-wrap">
      <tab-setting>
        <!--1-->
        <div slot="first">
          <div class="content-item-sub-title">模块标题</div>
          <w-input type="text" class="" v-model="itemData.title" placeholder="请输入模块标题" />
          <p></p>
          <div class="content-item-sub-title">更多链接</div>
          <div class="relative">
            <w-input type="text" class="" v-model="itemData.link" placeholder="请输入更多链接" />
            <link-icon :itemData="itemData" :itemIndex="0" :mapKey="'link'"></link-icon>
          </div>
          <p></p>
          <tab-layout>
            <div slot="one">
              <goods-item-layout :list="itemData.list" />
              <add-btn @click="add"> {{itemData.list.length}}/{{ allowCount }}</add-btn>
            </div>
            <div slot="two">
              <checked-item-block :data="itemData"></checked-item-block>
              <goods-item-layout :list="itemData.list" editable></goods-item-layout>
              <add-btn @click="add"> {{itemData.list.length}}/{{ allowCount }}</add-btn>
            </div>
          </tab-layout>
        </div>
        <!--2-->
        <div slot="second">
          <!--动态组件列表-->
          <dynamic-list type="swipe" :itemData="itemData"></dynamic-list>
        </div>
      </tab-setting>
    </div>
  </div>

</template>

<script>
export default {
  name: 'content-i-swipe',
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
      default: -1,
    },
    
  },
  data () {
    return {
      allowCount: 10,
    }
  },
  computed: {

  },
  methods: {
    add() {

      this.$store.commit('showGoodsDialog', {
        itemData: this.itemData,
        allowCount: this.allowCount,
        mode: 'add',
      })
    },
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">

</style>
