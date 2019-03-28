/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:40:39 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-24 09:43:47
 */
// 添加按钮
<template>
  <table style="width: 100%;">
    <tr>
      <td>
        <checked-btn :checked="data.show_title" @change="(val)=>{data.show_title = val;}">
          <span>显示宝贝名称</span>
        </checked-btn>
      </td>
      <td>
        <checked-btn :checked="data.show_prev_price" @change="(val)=>{data.show_prev_price = val;}">
          <span>显示宝贝原价</span>
        </checked-btn>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'checked-item-block',
  props:{
    data:{
      type: Object,
      default(){
        return {
          'show-title': false,
          'show-prev-price': false,
        }
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
  }
}
</script>

<style lang="scss">
  
</style>
