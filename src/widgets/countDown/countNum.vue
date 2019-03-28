/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:35:47 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-27 15:30:52
 */
<template>
  <div class="count-num-wrap">
    <div class="count-num bg-theme" v-for="item in count">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'count-num',
  props: {
    num: {
      type: Number,
      default: 0,
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    count() {
      let num = this.num.toString();
      if(num.length == 1) {
        num = '0'+num;
      }
      // console.log(num.split(''));
      return num.split('');
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
  .count-num-wrap{
    display: inline-block;
  }
  .count-num{
    display: inline-block;
    // background-color: orange;
    line-height: 1em;
    color: white;
    padding:3px 2px;
    border-radius: 2px;
    margin: 0 1px;
    font-size: 14px;
  }
</style>
