/*
 * @Author: zhangzhenyang 
 * @Date: 2018-12-12 16:52:54 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-14 09:35:47
 */

// 美工模板保存时 预设当拖动左侧时要使用哪个样式
<template>
  <modal-dialog @dismiss="dismiss(0)" @confirm="dismiss(0)" title="选择样式" sty="width: 900px;height:650px;" v-if="show" :showFooter="false">
    <!--content-->
    <div class="dialog-save-widget-setting" slot="content" >
      <!-- 加载成功 -->
      <div class="dialog-save-widget-setting-content">
        <!--动态组件列表-->
          <dynamic-list2 :type="type" :itemData="item"></dynamic-list2>

          <!--{{ type }}
          {{ item }}-->
      </div>
    </div>

    <!--footer-->
    <table slot="footer">
      <tr>
        <td class="left">
        </td>
        <td>
        </td>
        <td class="right">
          <button class="btn white" @click="confirm(false)">取消</button>
          <button class="btn primary" @click="confirm(true)">确定</button>
        </td>
      </tr>
    </table>
  </modal-dialog>
</template>

<script>

// import couponPromotion from './couponPromotion';
export default {
  name: 'dialog-save',
  components: {  },
  data () {
    return {
    }
  },
  computed: {
    md() {
      return this.$store.state.dialogSave;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    show() {
      return this.md.widgetShow;
    },
    type() {
      return this.md.widgetType;
    },
    item() {
      return this.md.widgetItem;
    },
    
  },
  methods: {
    dismiss(){
      this.md.widgetShow = false;
    },
    confirm(res) {
      
    },
  },
  created() {
  }
}
</script>

<style lang="scss">
  // content
  .dialog-save-widget-setting{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 55px;
  }
  .dialog-save-widget-setting-content{
    height: 100%;
    // overflow: auto;
    padding: 0 10px;
    text-align: left;
  }
  
</style>