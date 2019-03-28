/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:37:03 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-26 15:31:25
 */
// 滚动宝贝
<template>
  <div class="marquee-block">
    <widget-header :title="data.title" :link="data.link"></widget-header>
    <!--如果没有宝贝-->
    <empty-layout v-if="list.length == 0" />
    <div style="width:100%;overflow:hidden;white-space: nowrap;" ref="out">
      <div :class="{'marquee-block-img-wrap': true}" ref="in" :style="aniStyle">
        <goods-link :numIid="item.num_iid" v-for="item,index in list" :key="index">
          <div class="marquee-block-img-block">
            <img src="" alt="" :src="item.pic_url">
            <div class="goods-price">
              <span>{{ item.price }}</span>
            </div>
          </div>
        </goods-link>
      </div>
      <div :class="{'marquee-block-img-wrap': true}" v-if="run" :style="aniStyle">
        <goods-link :numIid="item.num_iid" v-for="item,index in list" :key="index">
         <div class="marquee-block-img-block">
            <img src="" alt="" :src="item.pic_url">
            <div class="goods-price">
              <span>{{ item.price }}</span>
            </div>
          </div>
        </goods-link>
      </div>
    </div>
    
    </marquee>
  </div>
</template>

<script>
export default {
  name: 'two-row',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'twoRow',
					list: [],
          title: '',
          link: '',
        }
      }
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
        animation: `marquee ${this.data.list.length * 2}s linear infinite`,
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
        // console.log('distance', distance);
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
  .marquee-block{
    .goods-price{

    }
  }
  .marquee-block{
    img{
      width: 120px;
      margin-left:10px;
    }
    .marquee-block-img-wrap{
      display: inline-block;
      white-space: nowrap;
      position: relative;
    }
  }
  .marquee-block-img-block{
    position: relative;
    display: inline-block;
    .goods-price{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      text-align: center;
      
      color: white;
      span{
        display: inline-block;
        background-color: orange;
        position: relative;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
      }
      span:before{
        content: '';
        display:inline-block;
        border-right: 10px solid orange;
        border-bottom: 10px solid orange;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        position: absolute;
        right: 100%;
        bottom: 0;
      }
      span:after{
        content: '';
        display:inline-block;
        border-left: 10px solid orange;
        border-bottom: 10px solid orange;
        border-top: 10px solid transparent;
        border-right: 10px solid transparent;
        position: absolute;
        left: 100%;
        bottom: 0;
      }
    }
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
