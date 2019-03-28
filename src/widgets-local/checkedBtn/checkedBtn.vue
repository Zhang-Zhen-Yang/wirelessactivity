/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:40:33 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:40:33 
 */

// 添加按钮
<template>
  <div :class="['checked-btn', checked ? 'btn-checked' : 'btn-inchecked']" @click="click">
    <slot></slot>
    <img class="checked-icon" :src="checkedIcon" alt="" v-if="checked">
  </div>
</template>

<script>
export default {
  name: 'checked-btn',
  props:{
    value: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    }
  },
  data () {
    return {
    }
  },
  computed: {
    checkedIcon() {
      return `${window.assets}checked.svg`
    }
  },
  methods: {
    click(){
      this.$emit('change', !this.checked);

    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  .checked-btn{
    border: 1px solid #1284e7;
    padding:5px 10px;
    text-align: center;
    color: #1284e7;
    cursor: pointer;
    font-size:14px;
    position: relative;
    -webkit-user-select:none;
    user-select:none;
    .checked-icon{
      position: absolute;
      right: -1px;
      bottom: -1px;
    }
    span{
      vertical-align: middle;
    }
    
  }
  .btn-checked{
    background-color: #efefef;
  }
  
</style>
