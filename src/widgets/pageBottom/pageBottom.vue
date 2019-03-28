/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-24 16:06:22 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-26 14:13:06
 */
// 页面底部
<template>
  <a-link :href="data.list[0].link">
    <img class="page-bottom-img" src="https://img.alicdn.com/imgextra/i1/105227988/O1CN01cgpqmj28sYFhyLjq8_!!105227988.png" alt="">
  </a-link>
  
</template>

<script>
export default {
  name: 'favorite',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'pageBottom',
          list: [{
            pic_url: 'https://img.alicdn.com/imgextra/i1/105227988/O1CN01cgpqmj28sYFhyLjq8_!!105227988.png',
            link: '',
          }],
        }
      }
    },
    global: {
      type: Object,
      default() {
        return {};
      }
    },
  },
  data () {
    return {
    }
  },
  computed: {
    dev() {
      return window.dev || false;
    }
  },
  methods: {

  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .page-bottom-img{
    width: 100%;
    vertical-align: middle;
  }
</style>
