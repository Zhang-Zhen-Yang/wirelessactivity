/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:43:43 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:43:43 
 */
// 宝贝设置 样式设置
<template>
<div>
  <div class="tab-setting-header">
    <span @click="setIndex(0)" :class="['tab-setting-tabitem', index == 0 ? 'tab-active' : 'tab-inactive']">{{ tabItem[0] }}</span>
    <span @click="setIndex(1)" :class="['tab-setting-tabitem', index == 1 ? 'tab-active' : 'tab-inactive']">{{ tabItem[1] }}</span>
  </div>
  <div v-show="index == 0">
    <slot name="first" ></slot>
  </div>
  <div v-show="index == 1">
    <slot name="second" ></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'tab-setting',
  props: {
    tabItem: {
      type: Array,
      default() {
        return ['宝贝设置', '样式设置'];
      }
    }
  },
  data () {
    return {
      index: 0,
    }
  },
  computed: {

  },
  methods: {
    setIndex(index) {
      this.index = index;
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  .tab-setting-header{
    border-bottom: 1px solid #aaaaaa;
    span{
      display: inline-block;
      padding: 10px;
      cursor: pointer;
      position: relative;
    }
    .tab-setting-tabitem{
      border: 1px solid transparent;
      border-bottom: none;
    }
    .tab-inactive{
      
    }
    .tab-active{
      border:1px solid #aaaaaa;
      border-bottom: none;
    }
    .tab-active:after{
      content: '';
      display:block;
      position: absolute;
      bottom: -2px;
      left:0;
      width: 100%;
      height: 3px;
      background-color: white;
    }
  }
</style>
