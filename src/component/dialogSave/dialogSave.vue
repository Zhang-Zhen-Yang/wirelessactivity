/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-05 10:54:50 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2019-01-18 10:29:36
 */
// 模板保存弹窗
<template>
  <modal-dialog @dismiss="dismiss(0)" @confirm="dismiss(0)" title="保存" sty="width: 600px;height:500px;">
    <!--content-->
    <div class="dialog-save-content-wrap" slot="content" >
      <!-- 加载成功 -->
      <div class="dialog-save-content">
        <save-content ref="content"></save-content>
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
import saveContent from './saveContent';
// import couponPromotion from './couponPromotion';
export default {
  name: 'dialog-save',
  components: { saveContent },
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
    
  },
  methods: {
    dismiss(){
      this.md.show = false;
    },
    confirm(res) {
      if(res) {
        let opts = this.$refs.content.getValue();
        let errorMsg = [];
        if(!opts.title) {
            errorMsg.push('请输入活动名称');
          }
        // 如果是管理员
        if(this.isAdmin) {
          if(!opts.templateTitle) {
            errorMsg.push('请输入模板名称');
          }
          if(!opts.attention) {
            errorMsg.push('请输入人气值');
          }
          if(!opts.domeImage) {
            errorMsg.push('请输入图片地址');
          }
          if(!opts.domeImageWeiTao) {
            errorMsg.push('请输入微淘图片地址');
          }
          if(!opts.domeImageJiaoDian) {
            errorMsg.push('请输入焦点图片地址');
          }
        } else {
          if(!opts.startDate) {
            errorMsg.push('请选择活动时间');
          }
        }
        if(errorMsg.length > 0) {
          alert(errorMsg.join(';'));
          return;
        }
        this.$store.dispatch('save', opts);
      } else {
        this.dismiss();
      }
    },
  },
  created() {
  }
}
</script>

<style lang="scss">
  // content
  .dialog-save-content-wrap{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 55px;
  }
  .dialog-save-content{
    height: 100%;
    // overflow: auto;
    padding: 0 10px;
    text-align: left;
  }
  
</style>