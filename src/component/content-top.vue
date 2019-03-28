/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:30:44 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2019-01-18 10:03:17
 */
<template>
  <div class="content-top">
    <div class="content-item-onerow">
      <div class="content-item-title">全局属性</div>
      <div class="content-item-wrap">
        <!--
        <div class="content-item-sub-title">活动页标题</div>
        <w-input type="text" v-model="global.title" placeholder="请输入无线活页标题" />
        -->
        <p></p>
        <color-picker v-model="global.bgBody" title="主题背景颜色"></color-picker>
        <p></p>
        <!--<color-picker v-model="global.bgBlock" title="模块背景颜色"></color-picker>
        <p></p>
        <color-picker v-model="global.bgBtn" title="按钮颜色"></color-picker>
        <p></p>
        <color-picker v-model="global.bgLight" title="背景浅颜色"></color-picker>
        <p></p>
        <color-picker v-model="global.colorTitle" title="宝贝标题颜色"></color-picker>
        <p></p>
        <color-picker v-model="global.colorPrice" title="宝贝价格颜色"></color-picker>
        <p></p>
        <color-picker v-model="global.colorPrevPrice" title="宝贝原价颜色"></color-picker>
        <p></p>
        <color-picker v-model="global.colorLight" title="主题浅颜色"></color-picker>
        <p></p>
        <color-picker v-model="global.colorBorder" title="模块边框颜色"></color-picker>-->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'content-top',
  components: {},
  directives: {},
  data () {
    return {
      colors:'#194d33',
      showPicker: false,
    }
  },
  computed: {
    global(){
      return this.$store.state.data.global;
    }
  },
  methods: {
    colorChange(e){
      // console.log(e);
      this.colors = `rgba(${e.rgba.r},${e.rgba.g},${e.rgba.b},${e.rgba.a})`;
    },
    openPopup(){
      this.showPicker = true;
    },
    closePopup() {
      console.log('dddd');
      this.showPicker = false;
    }
  },
  created() {
  }
}
</script>

<style lang="scss">

</style>
