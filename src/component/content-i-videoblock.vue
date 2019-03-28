/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:30:37 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:30:37 
 */
<template>
  <div class="content-item-video-block">
    <div class="content-item-title">视频模块</div>
    <div class="content-item-wrap">
      <div class="content-item-sub-title">视频</div>
      <mask-replace text="重新选择">
        <video :src="itemData.src"></video>
      </mask-replace>
      <div class="content-item-sub-title">播放设置</div>
      <p>
        <checkbox v-model="itemData.controls"><span class="font14">显示控制条</span></checkbox>
      </p>
      <p>
        <checkbox v-model="itemData.autoplay"><span class="font14">自动播放</span></checkbox>
      </p>
      <p>
        <checkbox v-model="itemData.loop"><span class="font14">循环播放</span></checkbox>
      </p>
      <p>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-item-video',
  props: {
    itemData:{
      type: Object,
      default() {
        return {
          name: '',
          src: 'http://localhost:8081/12.mp4',
          controls: true,
          autoplay: false,
          loop: false,
        }
      }
    },
    activeIndex: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
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
  .content-item-video-block{

    video{
      width: 100%;
    }
  }
</style>
