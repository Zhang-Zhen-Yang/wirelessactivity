/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:31:24 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-01 14:26:33
 */
<template>
  <header id="topbar">
    <a href="http://2015.wonbao.net" target="_blank" style="float: left;">
      <img src="http://2015.wonbao.net/images/comm/logo/logo.png" class="wb-link-img" alt="旺店宝">
    </a>
    <span @click="showMonaco" class="monaco-trigger pointer" :style="{backgroundImage: `url(${edit})`}" v-if="isAdmin"></span>
    <span class="title wireless-title"><span>无线活动页</span><img v-if="isAdmin" :src="adminIcon" alt=""><span v-if="isAdmin"> [ADMIN]</span></span>
      

    <div class="save-btn pointer center" @click="save">
      保存
    </div>
    <div class="save-btn save-more pointer center" style="margin-right: 10px;" @click="saveMore" v-if="(isAdmin && queryObj.templateId)||(!isAdmin && queryObj.planId)">
      另存一份
    </div>
    <div style="backgroud-color: orange;color:white;float:right;margin-right: 20px;cursor:pointer;" @click="tttt" v-if="false">
      TTTTT
    </div>
  </header>
</template>

<script>
export default {
  name: 'topbar',
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    adminIcon() {
      return `${window.assets}admin.svg`;
    },
    edit() {
      return `${window.assets}edit1.svg`;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    queryObj() {
      return this.$store.getters.queryObj;
    }
  },
  methods: {
    save() {
      this.$store.state.dialogSave.saveMore = false;
      this.$store.state.dialogSave.show = true;
      // this.$store.dispatch('save');
    },
    saveMore(){
      this.$store.state.dialogSave.saveMore = true;
      this.$store.state.dialogSave.show = true;
      // alert('另存一份');
    },
    showMonaco(){
      this.$store.state.modals[1].item = null;
      this.$store.state.modals[1].show = true;
    },
    tttt() {
      this.$store.dispatch('tttt');
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">
  #topbar{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #2e303a;
    line-height: 50px;
    .title{
      color: #fefefe;
      font-size: 20px;
      // margin-right: 160px;
    }
  }
  .save-btn{
    background-color:#1284e7;
    color: white;
    float: right;
    font-size: 20px;
    padding: 0 30px;
    min-width: 150px;
  }
  .monaco-trigger{
    float: left;
    color: white;
    padding:0 10px;
    width:50px;
    height: 100%;
    background-position: center center;
    background-repeat:no-repeat;
  }
  .save-more{
    background-color: #34404d;
  }
  .wireless-title{
    position: absolute;
    right: 50%;
    text-align: center;
    img{
      margin-left: 5px;
      vertical-align: -6px;
    }
  }
  .wb-link-img{
    margin: 13px 13px 0 13px;
  }
</style>
