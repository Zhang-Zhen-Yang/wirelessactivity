/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:28:56 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 10:07:44
 */

<template>
  <div class="content-item-countdown">
    <div class="content-item-title">倒计时模块</div>
    <div class="content-item-wrap">
      <tab-setting :tabItem="['倒计时设置', '样式设置']">
          <div slot="first">
            <div class="content-item-sub-title">活动名称</div>
            <w-input type="text" class="" v-model="itemData.name" />
            <p></p>
            <div class="content-item-sub-title">活动时间</div>
            <date-range-picker :startDate="itemData.startDate" :endDate="itemData.endDate" @change="change"></date-range-picker>
          </div>
          <div slot="second">
            <!--动态组件列表-->
            <dynamic-list type="countDown" :itemData="itemData"></dynamic-list>
          </div>
      </tab-setting>

    </div>
  </div>
</template>

<script>
export default {
  name: 'content-countdown',
  props: {
    itemData:{
      type: Object,
      default() {
        return {
          startDate: Date.now(),
          endDate: Date.now() + 3600000 * 24,
          name: ''
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
    change(res) {
      console.log(res);
      this.$store.dispatch('addStep');
      this.$store.state.data.list[this.activeIndex].startDate = res[0];
      this.$store.state.data.list[this.activeIndex].endDate = res[1];
    },
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
.content-item-countdown{
  min-height:100%;
  margin-bottom: 500px;
}
</style>
