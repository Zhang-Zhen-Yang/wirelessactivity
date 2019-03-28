/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:31:12 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 11:09:12
 */
<template>
  <div>
    <div id="phone-top" :style="stys">
      <phoneTopTime></phoneTopTime>
      <div class="phone-battery">
      </div>
    </div>
    <div id="phone-title" :style="styTitle">
      <div class="phone-title-back">
      </div>
      {{ title }}
      <div class="phone-title-more">
      </div>
    </div>
  </div>
</template>

<script>
import phoneTopTime from './phone-top-time.vue';
export default {
  name: 'phone-top',
  components: { phoneTopTime },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    phoneBg() {
      return `${window.assets}phone.png`;
    },
    title(){
      return this.$store.state.data.global.title;
    },
    stys() {
      return {
        backgroundImage:  `url(${this.phoneBg})`
      }
    },
    styTitle() {
      return {
        height: '20px;',
        background: `url(http://imgs.aixifan.com/content/2018_12_2/1.543743884153811E9.png?imageView2/1/w/200/h/110) left top 20px auto no-repeat   `
      }
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
  #phone-top{
    background-color: white;
    border-radius: 45px 45px 0 0;
    width: 100%;
    height: 80px;
    background-repeat: no-repeat;
    background-size: 400px auto;
    background-position: -13px -13px;
    position: relative;
  }
  #phone-title{
    background-color: white;
    width: 100%;
    height: 20px;
    background-repeat: no-repeat;
    background-size: 350px auto;
    background-position: center bottom;
    text-align: center;
    line-height: 20px;
    font-family: 黑体;
    font-size: 15px;
    font-weight: bold;
  }
  .phone-title-back,.phone-title-more,.phone-battery{
    width: 35px;
    height: 100%;
    // background-color: orange;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .phone-battery{
    position: absolute;
    right: 0px;
    bottom:4px;
    width: 20px;
    height: 20px;
    // background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M810.668 725.329h-640V298.665h640v127.992h85.335v170.67h-85.335v128.002zM213.335 682.65H768V554.66h85.335v-85.335H768V341.332H213.335v341.32z' fill='%23FF0037'/%3E%3Cpath d='M639.999 383.99v256.004H256.002V383.99H640z' fill='%23FF0037'/%3E%3C/svg%3E");

  }
  .phone-title-back{
    float: left;
    background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M271.918 481.733l301.55-301.55c16.703-16.703 43.635-16.853 60.414-.074 16.662 16.662 16.42 43.92-.075 60.414L405.02 469.31l-39.74 42.667 39.739 42.666 228.788 228.789c16.704 16.703 16.853 43.636.075 60.414-16.663 16.663-43.92 16.42-60.415-.074l-301.55-301.55c-16.736-16.737-16.494-43.995 0-60.49z' fill='%23111111'/%3E%3C/svg%3E");
  }
  .phone-title-more{
    float: right;
    background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M265.1 509.8c-.1 45.5-36.8 82.2-82.4 82.1-45.4-.1-82.3-37-82.2-82.5 0-45.3 37.1-82.2 82.6-82.1 45.4.1 82 36.9 82 82.5zm577-82.4c45.5 0 82.5 36.8 82.5 82.2.1 45.4-36.8 82.4-82.3 82.4-45.6 0-82.4-36.6-82.4-82.2s36.6-82.4 82.2-82.4zM512.4 592c-45.4 0-82.6-37.3-82.4-82.4.3-45.5 37.1-82.2 82.6-82.2 45.4 0 82.5 37.1 82.3 82.4-.1 45.4-37 82.2-82.5 82.2z' fill='%23111111'/%3E%3C/svg%3E");
  }

</style>
