/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:39:02 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:39:02 
 */
// 添加按钮
<template>
  <div class="add-btn" @click="click">
    <span class="plus">+</span>
    <span class="word">添加<slot></slot></span>
  </div>
</template>

<script>
export default {
  name: 'widget-header',
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {
    click(){
      this.$emit('click');
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  .add-btn{
    border: 1px dashed #1284e7;
    padding:5px 10px;
    text-align: center;
    color: #1284e7;
    cursor: pointer;
    margin-bottom: 100px;
    span{
      vertical-align: middle;
    }
    .plus{
      font-size: 35px;
      vertical-align: -7px;
    }
  }
</style>
