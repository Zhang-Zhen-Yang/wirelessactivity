/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:37:31 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-28 11:27:57
 */
<template>
  <!--轮播宝贝-->
  <div>
    <widget-header :title="data.title" :link="data.link"></widget-header>
    <swipe-group class="my-swipe" v-if="data.list.length > 0" :style="swipeStyle">
      
      <swipe-item class="slide" v-for="item, index in data.list" :key="index">
        <goods-link :numIid="item.num_iid">
          <div class="" style="position: relative;" ref="aspectWrap">
            <aspect :ratio="1" :css="{}">
              <img :src="item.pic_url" alt="" style="width: 100%">
              <div class="swipe-title goods-title" v-if="data.show_title">
                <span>
                  {{ item.title }}
                </span>
              </div>
              <div class="swipe-prev-price color-price" v-if="data.show_prev_price">
                {{ item.prev_price | pri }}
              </div>
              <div class="swipe-price color-prev-price">
                {{ item.price | pri }}
              </div>
            </aspect>
          </div>        
        </goods-link>
      </swipe-item>
    </swipe-group>
    <empty-layout v-if="data.list.length == 0" />
  </div>
</template>

<script>

export default {
  name: 'temp',
  components: { /* SwipeGroup: Swipe, SwipeItem */},
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'swipe',
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
      height: 200,
    }
  },
  computed: {
    swipeStyle() {
      return {
        height: `${this.height}px`,
      }
    }
  },
  methods: {
    setHeight() {
      let aspectWrap = this.$refs.aspectWrap;
      if(aspectWrap && aspectWrap[0]) {
        console.log(aspectWrap[0].clientHeight);
        let height = aspectWrap[0].clientHeight;
        if(height) {
          this.height = height;
        }
      }
    }
  },
  created() {
    // console.log('created');
  },
  mounted() {
    this.setHeight();
  },
  watch: {
    data:{
      handler(n) {
        this.$nextTick(()=>{
          this.setHeight()
        })
      },
      deep: true,
    }
  }
}
</script>

<style lang="scss">
  .my-swipe{
    overflow: hidden;
    .swipe-title{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      // color: white;
      background-color: rgba(0,0,0,0.2);
      font-size: 14px;
    }
    .swipe-prev-price{
      position: absolute;
      left: 0;
      top: 100px;
      // color: orange;
    }
    .swipe-prev-price:before{
      content: '原价';
      background-color: orange;
      color: white;

    }
    .swipe-price{
      position: absolute;
      left: 0;
      top: 0;
      // color: white;
      background-color: rgba(0,0,0,0.2);
      font-size: 20px;
      padding: 0 10px; 
    }
  }
</style>
