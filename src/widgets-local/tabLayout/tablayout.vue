/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:43:34 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:43:34 
 */
// 选项卡
<template>
  <div class="tab-layout">
  <div class="tab-layout-head">
    <div v-for="item,index in tabs" :class="['pointer', tabIndex==index? 'active': 'unactive']" @click="tabIndex = index">
      {{ item }}
    </div>
  </div>
  <slot name="one" v-if="tabIndex == 0"></slot>
  <slot name="two" v-if="tabIndex == 1"></slot>
  </div>
</template>

<script>
export default {
  name: 'one-row',
  data () {
    return {
      tabs: ['选择宝贝', '宝贝展现'],
      tabIndex: 0,
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
  .tab-layout{
  }
  .tab-layout-head{
    margin-left: 0px;
  }
  .tab-layout-head>div{
    display: inline-block;
    min-width:120px;
    text-align: center;
    border-top: 2px solid transparent;
    padding: 5px 0px 20px;
  }
  .tab-layout-head>div.active{
    border-top: 2px solid #1284e7;
  }

</style>
