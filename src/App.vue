/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-27 14:40:21 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 14:16:24
 */

<template>
  <div id="app" @drop="drop($event)" @dragover="dragover($event)">
    <leftbar></leftbar>
    <rightbar></rightbar>
    <contents></contents>
    <topbar></topbar>
    <!--<modal-dialog v-if="modals[0].show" @dismiss="dismiss(0)" @confirm="dismiss(0)"></modal-dialog>-->
    <!--宝贝列表-->
    <dialog-goods v-if="dialogGoodsShow"></dialog-goods>
    <dialogImage v-if="dialogImageShow"></dialogImage>
    <dialogCoupon v-if="couponDialogShow"></dialogCoupon>
    <dialogPromotionMeal v-if="promotionMealDialogShow"></dialogPromotionMeal>
    <dialogLink v-if="linkDialogShow"></dialogLink>
    <dialogCode v-if="codeDialogShow"></dialogCode>
    <dialogPreview v-if="previewDialogShow"></dialogPreview>
    <keep-alive>
      <dialogSave v-if="saveDialogShow"></dialogSave>
    </keep-alive>
    <dialogAfterSave v-if="afterSaveShow"></dialogAfterSave>
    <!--css 代码编辑器-->
    <monaco></monaco>
    <snackbar ref="snackbar"></snackbar>
    <loadingMask v-if="loadingMask.show" :text="loadingMask.text"></loadingMask>
    <dialogSaveWidgetSetting></dialogSaveWidgetSetting>
  </div>
</template>

<script>
import leftbar from './component/leftbar.vue';
import rightbar from './component/rightbar.vue';
import contents from './component/content.vue';
import topbar from './component/topbar.vue';
import temp from './temp.vue';
import dialogGoods from './component/dialogGoods/dialogGoods.vue';
import dialogImage from './component/dialogImage/dialogImage.vue';
import dialogCoupon from './component/dialogCoupon/dialogCoupon.vue';
import dialogPromotionMeal from './component/dialogPromotionMeal/dialogPromotionMeal.vue';
import dialogLink from './component/dialogLink/dialogLink.vue';
import dialogCode from './component/dialogCode/dialogCode.vue';
import dialogSave from './component/dialogSave/dialogSave.vue';
import dialogSaveWidgetSetting from './component/dialogSaveWidgetSetting/dialogSaveWidgetSetting.vue';
import dialogAfterSave from './component/dialogAfterSave/dialogAfterSave.vue';
import dialogPreview from './component/dialogPreview/dialogPreview.vue';
import loadingMask from './component/loadingMask.vue';
export default {
  name: 'app',
  components: {
    temp,
    topbar,
    contents,
    leftbar,
    rightbar,
    dialogGoods,
    dialogImage,
    dialogCoupon,
    dialogPromotionMeal,
    dialogLink,
    dialogCode,
    dialogSave,
    dialogAfterSave,
    dialogPreview,
    loadingMask,
    dialogSaveWidgetSetting
  },
  data () {
    return {
    }
  },
  computed:{
    modals(){
      return this.$store.state.modals;
    },
    couponDialogShow(){
      return this.$store.state.coupon.show;
    },
    promotionMealDialogShow() {
      return this.$store.state.promotionMeal.show;
    },
    linkDialogShow() {
      return this.$store.state.link.show;
    },
    snackbar(){
      return this.$store.state.modals[2];
    },
    loadingMask() {
      return this.$store.state.loadingMask;
    },
    dialogGoodsShow() {
      return this.$store.state.dialogGoods.show;
    },
    dialogImageShow() {
      return this.$store.state.dialogImage.show;
    },
    codeDialogShow() {
      return this.$store.state.dialogCode.show;
    },
    previewDialogShow() {
      return this.$store.state.preview.show;
    },
    saveDialogShow() {
      return this.$store.state.dialogSave.show;
    },
    afterSaveShow() {
      return this.$store.state.dialogSave.afterSave.show;
    }
  },
  methods: {
    dragover(ev) {
      ev.preventDefault();
    },
    drop(ev) {
      ev.preventDefault();
    },
  },
  created() {
    this.$store.dispatch('init');
  },
  mounted(){
  },
  watch:{
    snackbar:{
      handler(e){
        if(e.show){
          this.$refs.snackbar.show(this.snackbar.text, this.snackbar.timeout);
          this.$store.state.modals[2].show=false;
        }
      },
      deep: true,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family:微软雅黑, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // margin-top: 60px;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
