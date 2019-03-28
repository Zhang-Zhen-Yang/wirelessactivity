/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-06 09:12:21 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-06 09:19:33
 */
<template>
  <div class="notice-box font14">
    <img :src="icon" alt="" class="alert-icon"> <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'notice-box',
  data () {
    return {
    }
  },
  computed: {
    icon() {
      return `${window.assets}alert.svg`;
    }
  },
  methods: {
    
  },
  created() {
  }
}
</script>

<style lang="scss">
  .notice-box{
    border: 1px solid #f1622a;
    padding: 10px;
    color: #f1622a;
    background-color: #fff6ef;
  }
  .alert-icon{
    width: 20px;
    vertical-align: -4px;
  }
  
</style>
