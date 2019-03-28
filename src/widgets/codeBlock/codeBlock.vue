/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-01 15:06:34 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-02 13:44:48
 */

// 代码模块
<template>
  <div class="code-block" v-html="data.code">
   
  </div>
</template>

<script>
export default {
  name: 'code-block',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'codeBlock',
					list: [],
          code: ''
        }
      }
    },
    global: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {

  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .code-block{
    min-height: 10px;
  }
</style>
