/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:36:00 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:36:00 
 */
// 当没有宝贝时显示
<template>
  <div class="empty-layout" :style="{backgroundImage:`url(${emptyIcon})`}">
  </div>
</template>

<script>
export default {
  name: 'one-row',
  props: {
    count:{
      type: Number,
      default: 0,
    },
  },
  data () {
    return {
    }
  },
  computed: {
    emptyIcon() {
      return `${window.assets}empty.png`
    }
  },
  methods: {

  },
  created() {
  }
}
</script>

<style lang="scss">
  .empty-layout{
    height: 200px;
    background-position: center center;
    background-repeat:no-repeat;
    background-color: #ededed;
  }
</style>
