/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:36:36 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-07 10:49:19
 */
// 焦点图 其实就是图片轮播
<template>
  <div class="focus-img">
    <Swipe class="" :style="{height: `${data.height}px`}" v-if="data.list.length != 0">
      <swipe-item class="slide" v-for="item, index in data.list" :key="index" >
        <a-link :href="item.link">
          <div :style="{backgroundImage: `url(${item.pic_url})`, height: `${data.height}px`}" class="swipe-item">
          </div>
        </a-link>
      </swipe-item>
    </Swipe>
    <empty-layout v-if="data.list.length == 0"></empty-layout>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  name: 'focus-img',
  components: { Swipe, SwipeItem },
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'focus-img',
          heigth: 200,
					list: [
            {
              pic_url: 'http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png',
            }
          ],
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {

  },
  methods: {

  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  .focus-img{
    .swipe-item{
      background-size: cover;
      background-position: center center;
      width: 100%;
    }
  }
</style>
