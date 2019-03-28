/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:29:23 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 10:08:30
 */

<template>
  <div class="content-item-hotitem">
    <div class="content-item-title">爆款推荐模块</div>
    <div class="content-item-wrap">
      <tab-setting>
        <!--1-->
        <div slot="first">
          <p></p>
          <mask-replace :text="'选择宝贝'" @select="select">
            <img :src="itemData.list[0].pic_url" alt="" class="content-item-img">
            <empty-layout v-if="!itemData.list[0].pic_url"></empty-layout>
          </mask-replace>
          <div class="content-item-sub-title">宝贝标题</div>
          <w-input type="text" class="" v-model="itemData.list[0].title" placeholder="请输入宝贝标题" />
          <p></p>
          <div class="content-item-sub-title">活动价</div>
          <w-input type="number" class="" v-model="itemData.list[0].price" placeholder="请输入活动价" style="-webkit-appearance: none;" />
          <p></p>
          <div class="content-item-sub-title">原价</div>
          <w-input type="number" class="" v-model="itemData.list[0].prev_price" placeholder="请输入原价" />
          <p></p>
          <div class="content-item-sub-title">活动名称</div>
          <w-input type="text" class="" v-model="itemData.name" placeholder="请输入活动名称" />
          <p></p>
          <div class="content-item-sub-title">活动时间</div>
          <date-range-picker :startDate="itemData.startDate" :endDate="itemData.endDate" @change="change"></date-range-picker>
        </div>
        <!--2-->
        <div slot="second">
          <!--动态组件列表-->
          <dynamic-list type="hotItem" :itemData="itemData"></dynamic-list>
        </div>
      </tab-setting>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-item-onerow',
  props: {
    itemData:{
      type: Object,
      default() {
        return {
          startDate: Date.now(),
          endDate: Date.now() + 3600000 * 24,
          name: '',
          list: [
            {
              title: '',
              price: '555',
              origin_price: '555',
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
      allowCount: 1,
    }
  },
  computed: {
    
  },
  methods: {
    change(res) {
      this.$store.dispatch('addStep')
      this.$store.state.data.list[this.activeIndex].startDate = res[0];
      this.$store.state.data.list[this.activeIndex].endDate = res[1];
    },
    select() {
      this.$store.commit('showGoodsDialog', {
        itemData: this.itemData,
        allowCount: this.allowCount,
        mode: 'alternative',
      })
      // alert('select');
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  
</style>
