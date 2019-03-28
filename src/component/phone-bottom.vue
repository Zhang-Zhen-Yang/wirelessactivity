/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:31:06 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:31:06 
 */
<template>
  <div id="phone-bottom" :style="stys">
  </div>
</template>

<script>
export default {
  name: 'phone-bottom',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    phoneBg() {
      return `${window.assets}phone.png`;
    },
    stys() {
      return {
        backgroundImage:  `url(${this.phoneBg})`
      }
    }
  },
  methods: {

  },
  created() {
    
  }
}
</script>

<style lang="scss">
  #phone-bottom{
    width: 100%;
    height: 80px;
    background-color: white;
    border-radius: 0 0 45px 45px;
    background-repeat: no-repeat;
    background-size: 400px auto;
    background-position: -13px -109px;
  }
</style>
