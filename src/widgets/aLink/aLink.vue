/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:35:21 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:35:21 
 */
// 链接
<template>
  <a :href="dev ? 'javascript:void(0)' : trueLink" class="a-link">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'a-link',
  props: {
    href:{
      type: [String, Number],
      default: '',
    },
    baseUrl: {
      type: String,
      default: '',
    }
  },
  data () {
    return {
    }
  },
  computed: {
    dev() {
      return window.dev || false;
    },
    trueLink() {
      let link = (this.baseUrl + this.href);
      return link || 'javascript:void(0)';
    }
  },
  methods: {

  },
  created() {
  }
}
</script>

<style lang="scss">
  .a-link{
    text-decoration: none;
    color: inherit;
  }
</style>
