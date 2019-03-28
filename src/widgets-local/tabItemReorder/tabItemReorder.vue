/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:43:26 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-08 15:16:22
 */
// 选项卡排序 删除
<template>
  <div class="tab-item-reorder">
   <table style="width: 100%;">
     <tr>
       <td >
        <div @click.stop="setAction('l')" v-if="index>0" class="icon-left" :style="{backgroundImage: `url(${left})`}"></div>
        <div @click.stop="setAction('r')" v-if="index +1 < count" class="icon-right" :style="{backgroundImage: `url(${right})`}"></div>
       </td>
       <td>
        <div @click.stop="setAction('d')" class="icon-delete">
          &times;
        </div>
       </td>
     </tr>
   </table>
  </div>
</template>

<script>
export default {
  name: 'tab-item-reorder',
  props:{
    index: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0,
    }
  },
  data () {
    return {
    }
  },
  computed: {
    left() {
      return `${window.assets}left.svg`;
    },
    right() {
      return `${window.assets}right.svg`;
    }
  },
  methods: {
    setAction(type){
      this.$emit('setAction', {type, index: this.index});
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  .tab-item-reorder{
    position: absolute;
    left:0;
    width: 100%;
    top:-30px;
    background-color: #2c3e50;
    outline: 1px solid #2c3e50;
    height: 30px;
    display: none;
    cursor: default;
    td>div{
      display: inline-block;
      height: 19px;
    }
    td:first-child{
      text-align: left;
    }
    td:last-child{
      text-align: right;
    }
    .icon-left,.icon-right{
      width: 30px;
      background-size: auto 25px;
      background-position: center center;
      background-repeat: no-repeat;
      cursor: pointer;
      height: 19px;
      vertical-align: middle;
    }
    .icon-right{
      margin-left: 5px;
    }
    .icon-delete{
      cursor: pointer; 
      font-size: 25px;
      line-height: 25px;
    }

  }
</style>
