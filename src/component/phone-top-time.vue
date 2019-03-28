/*
 * @Author: zhangzhenyang 
 * @Date: 2018-12-03 10:14:01 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 10:40:37
 */

<template>
  <div class="phone-top-time">
    <div>
      {{ hours }}<span style="vertical-align:1px;">:</span>{{ minutes }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'phone-top-time',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      hours: '21',
      minutes: '00'
    }
  },
  computed: {

  },
  methods: {
    getTime() {
      let date = new Date();
      let hours = `0${date.getHours()}`.slice(-2);
      let minutes = `0${date.getMinutes()}`.slice(-2);
      this.hours = hours;
      this.minutes = minutes;
      this.timeoutHandler = setTimeout(()=>{
        this.getTime();
      }, 1000)
    }
  },
  created() {
    this.getTime();
    // console.log('created');
  },
  destroyed() {
    if(this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
    }
  },
}
</script>

<style lang="scss">
  .phone-top-time{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    cursor: default;
    div{
      display: inline-block;
      background-color: white;
      font-size: 12px;
      font-family: 微软雅黑;
      font-weight: bold;
      line-height: 25px;
      color: #000000;
      min-width: 50px;
    }
  }
</style>
