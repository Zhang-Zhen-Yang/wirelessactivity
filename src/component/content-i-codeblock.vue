/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-01 15:11:51 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-06 09:22:26
 */

<template>
  <div class="temp">
    <div class="content-item-title">自定义代码模块</div>
    <div class="content-item-wrap">
      <p></p>
      <notice-box>
        本模板供有一定html和css知识基础的人使用。如果此知识有所欠缺，可以通过
        <a href="https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Getting_started" target="_blank">HTML 入门 - 学习 Web 开发 | MDN</a>
        学习相关的技术知识
      </notice-box>
      <p></p>
      <button class="btn primary" @click="modifyCode">修改代码</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'content-i-codeblock',
  props: {
    itemData:{
      type: Object,
      default() {
        return {
          startDate: Date.now(),
          endDate: Date.now() + 3600000 * 24,
          name: ''
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
    img() {
      if(this.itemData.list[0]) {
        return this.itemData.list[0].pic_url
      }
      return `${window.assets}empty.png`;
    }
  },
  methods: {
    modifyCode() {
      this.$store.state.dialogCode.show = true;
      this.$store.state.dialogCode.data = this.itemData;
      
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">

</style>
