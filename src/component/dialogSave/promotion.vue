/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:28:41 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:28:41 
 */

// 官方搭配套餐
<template>
  <div class="dialog-promotion">
    <img src="http://imgs.aixifan.com/o_tgseit1c1muh1fsoob811eq2ep.jpg" alt="">
    <img src="http://imgs.aixifan.com/o_tgseit1d1dg0au514itiaa1qfru.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'dialog-promotion',
  components: {
    first: {
      template:'<div><span v-for="item, index in list">|{{ item }},{{ state.name }},{{data}}|</span></div>',
      props:{
        data:{
          type: String,
          default: 'tttttttttt'
        }
      },
      data(){
        return {
          list: ['a', 'b', 'c', 'd'],
        }
      },
      computed: {
        state() {
          return this.$store.state;
        }
      }
    }
  },
  data () {
    return {
      widget: 'first',
      itemData: 'text text',
      tt: 'dddddddddddd',
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
