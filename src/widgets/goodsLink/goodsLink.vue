/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:36:44 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-05 09:15:03
 */
// 链接
<template>
  <a-link :href="link">
    <slot></slot>
  </a-link>
</template>

<script>
export default {
  name: 'goods-link',
  props: {
    numIid: {
      type: [Number, String],
      default: '',
    }
  },
  data () {
    return {
    }
  },
  computed: {
    link() {
      return `https://h5.m.taobao.com/awp/core/detail.htm?id=${this.numIid}`;
    }
  },
  methods: {

  },
  created() {
  }
}
</script>

<style lang="scss">
  
</style>
