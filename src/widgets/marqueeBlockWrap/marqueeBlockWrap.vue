/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:37:03 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-12 11:14:03
 */
// 滚动宝贝
<template>
  <div class="marquee-block-wrap">
    <slot name="top"></slot>
    <!--如果没有宝贝-->
    <empty-layout v-if="list.length == 0" />
    <div style="width:100%;overflow:hidden;white-space: nowrap;" ref="out">
      <div :class="{'marquee-block-wrap-inner': true}" ref="in" :style="aniStyle">
        <slot name="one"></slot>
      </div>
      <div :class="{'marquee-block-wrap-inner': true}" v-if="run" :style="aniStyle">
        <slot name="two"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marquee-block-wrap',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'marqueeBlock',
					list: [],
          title: '',
          link: '',
        }
      }
    },
    speed: {
      type: Number,
      default: 2
    },
    global: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      run: false,
    }
  },
  computed: {
    aniStyle() {
      if(!this.run) return {};
      return {
        animation: `marquee ${this.data.list.length * this.speed}s linear infinite`,
      }
    },
    list(){
      return this.data.list;
    }
  },
  methods: {
    checkRun(){
      this.$nextTick(()=> {
        let distance = this.$refs.in.clientWidth - this.$refs.out.clientWidth;
        console.log('distance', distance);
        this.run = distance > 0;
      })
    }
  },
  created() {
    // console.log('created');
  },
  mounted() {
    this.checkRun();
  },
  watch:{
    list:{
      handler(n, o){
        this.checkRun(); 
      },
      deep: true,
    }
  }
}
</script>

<style lang="scss">
  .marquee-block-wrap{
    
  }
  .marquee-block-wrap-inner{
    display: inline-block;
    white-space: nowrap;
    position: relative;
  }
  .marquee-ani{
    -webkit-animation: marquee 30s linear infinite;
    animation: marquee 30s linear infinite;
  }
  @-webkit-keyframes marquee {
    0%  { -webkit-transform: translate3d(0,0,0); }
    100% { -webkit-transform: translate3d(-100%,0,0); }
  }
  @keyframes marquee {
    0%  { transform: translateX(0); }
    100% { transform: translateX(-100%);}
  }
</style>
