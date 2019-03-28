/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:37:20 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:37:20 
 */
// 海报
<template>
  <a v-if="data.list.length >0" :href="dev ? 'javascript:void(0)' : data.list[0].link">
    <div class="poster">
      <img class="goods-pic" :src="data.list[0].pic_url" alt="">
    </div>
  </a>
  <empty-layout v-else="data.list.length >0"></empty-layout>
</template>

<script>
export default {
  name: 'poster',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'poster',
          list: [{
            pic_url: ''
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
    width: {
      type: Number,
      default: 0,
    }
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
  .poster{
    img{
      width: 100%;
      vertical-align: middle;
    }
  }
</style>
