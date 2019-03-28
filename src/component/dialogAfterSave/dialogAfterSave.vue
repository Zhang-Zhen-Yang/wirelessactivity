/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-22 11:09:46 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-22 15:34:35
 */
// 模板保存成功后显示的弹窗
<template>
  <modal-dialog @dismiss="dismiss(0)" @confirm="dismiss(0)" title="保存成功" sty="width: 400px;height:600px;" :showFooter="false">
    <!--content-->
    <div class="dialog-save-after-content-wrap" slot="content" >
      <!-- 加载成功 -->
      <div class="dialog-save-after-content">
        <table cellspacing="0" cellpadding="0">
          <tr>
            <td colspan="3">
              <svg t="1542858509668" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1957" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
                  <path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#1AAC19" p-id="1958"></path>
                  <path d="M809.691429 392.777143L732.16 314.514286 447.634286 599.771429 292.571429 443.977143 214.308571 521.508571l155.794286 155.794286 77.531429 77.531429 362.057143-362.057143z" fill="#FFFFFF" p-id="1959"></path>
              </svg>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <span>创建成功！赶紧去推广吧~</span>
            </td>
          </tr>
          <tr>
            <td>
              <button class="btn white btn-save-after" @click="action(0)">
                继续创建
              </button>
            </td>
            <td>
              <button class="btn white btn-save-after" @click="action(1)">
                管理我的活动页
              </button>
            </td>
            <td>
              <button class="btn white btn-save-after" @click="action(2)">
                去推广
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <qrcode
                :width="150" 
                :height="150"
                :data="qrcode"
              />
            </td>
          </tr>
          <tr>
            <td colspan="3" style="padding: 0px;">
              <span>扫一扫，用手机预览</span>
            </td>
          </tr>
        
        </table>
      </div>
    </div>

    <!--footer-->
    <table slot="footer" v-if="false">
      <tr>
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
  name: 'dialog-after-save',
  components: {  },
  data () {
    return {
    }
  },
  computed: {
    md() {
      return this.$store.state.dialogSave.afterSave;
    },
    qrcode() {
      return `https://wonbao.ews.m.jaeapp.com/wirelesspagenew/activityNew?seller_id=${window.user.id}&id=${this.md.id}`;
    }
    /* isAdmin() {
      return this.$store.getters.isAdmin;
    },*/
    
  },
  methods: {
    dismiss(){
      this.md.show = false;
    },
    confirm() {

    },
    action(type) {
      switch(type){
        // 继续创建
        case 0:
          // window.history.back();
          console.log(window.history.length);
          if(window.history.length > 1) {
            window.history.back();
          } else {
            location.href=`${window.remote}marketing/wirelessnew/template/list`;
          }
          break;
        // 管理我的活动页
        case 1:
          location.href = `${window.remote}marketing/wirelessnew/activitypage/list`;
          break;
        // 去推广
        case 2:
          console.log([this.md.id, this.md.templateId]);
          location.href = `${window.remote}marketing/wirelessnew/activitypage/promotion?pageId=${this.md.id}&id=${this.md.templateId}`;
          break;
        default: break;
      }
    }
    
  },
  created() {
  }
}
</script>

<style lang="scss">
  // content
  .dialog-save-after-content-wrap{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 55px;
  
  }
  .dialog-save-after-content{
    height: 100%;
    // overflow: auto;
    padding: 0 10px;
    text-align: left;
    svg{
      width: 100px;
      height: 100px;
    }
    table{
      width: 100%;
      td{
        text-align: center;
        padding: 20px 0;
      }
    }
  }
  .btn-save-after{
    font-size: 12px;
    font-weight: normal;
    font-family: 微软雅黑;
    padding: 9px 9px;
    min-width: 8em;
  }
  
</style>