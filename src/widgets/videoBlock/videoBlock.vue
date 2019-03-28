/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:38:05 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: 2018-10-31 15:38:05 
 */
// 视频
<template>
  <div class="video-block">
    <video :src="data.src" :controls="data.controls" :autoplay="data.autoplay" :loop="data.loop">
    
    </video>
  </div>
</template>

<script>
export default {
  name: 'video-block',
  props: {
    data:{
      type: Object,
      default() {
        return {
          type: 'video',
					src: 'http://localhost:8081/12.mp4',
          controls: true,
          autoplay: false,
          loop: false,
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
  .video-block{
    video{
      width: 100%;
    }
  }
</style>
