/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-27 14:12:23 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-10-31 16:23:18
 */

// 选择链接的图标
<template>
  <div class="link-icon pointer" :style="{backgroundImage: `url(${icon})`}" @click="open">
  </div>
</template>

<script>
export default {
  name: 'link-icon',
  props: {
    itemData: {
      type: Object,
      default: {

      },
    },
    itemIndex: {
      type: Number,
      default: 0,
    },
    mapKey: {
      type: String,
      default: '',
    }
  },
  data () {
    return {
    }
  },
  computed: {
    icon() {
      return `${window.assets}link.svg`
    }
  },
  methods: {
    open(){
      this.$store.state.link.show = true;
      this.$store.state.link.itemData = this.itemData;
      this.$store.state.link.itemIndex = this.itemIndex;
      this.$store.state.link.key = this.mapKey;
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
  .link-icon{
    width: 40px;
    height: 100%;
    float: right;
    background-size: 60% auto;
    position: absolute;
    right: 0;
    top: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    border: 1px solid transparent;
    background-clip: content-box;
    border-radius: 10px;
  }
</style>
