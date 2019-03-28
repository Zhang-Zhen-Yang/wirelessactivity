/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-03 10:09:02 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 11:24:23
 */

<template>
  <modal-dialog
    @dismiss="dismiss(0)"
    @confirm="dismiss(0)"
    title="预览"
    :sty="`height: 700px; width: 390px;transform: translate(-100px, 0)`"
    :showBack="true"
    @back="back"
  >

    <!--content-->
    <div class="dialog-preview-content-wrap" slot="content" >
      <div class="dialog-preview-content">
        <iframe name="previewIFrame" :src="link" frameborder="0" width="375" height="100%" class="scrollbar-overwrite" style=""></iframe>
      </div>
      <div class="preview-qrcode">
        <qrcode
          :width="120" 
          :height="120"
          :data="previewData"
        />
        <div>扫码预览</div>
      </div>
    </div>

    <!--footer-->
    <table slot="footer" v-if="false">
      <tr>
        <td class="left">
        
        </td>
        <td>
          <!-- <pagination v-if="tabIndex==0" :pageSize="pageSize" :pageNo="pageNo" :count="count" @goToPage="goToPage"></pagination>-->
        </td>
        <td class="right">
          <button class="btn primary" @click="confirm">取消</button>
        </td>
      </tr>
    </table>
  </modal-dialog>
</template>

<script>

export default {
  name: 'dialog-preview',
  components: { },
  data () {
    return {
      v: 0,
    }
  },
  computed: {
    
    md() {
      return this.$store.state.preview;
    },
    link() {
      // return this.md.link;
      return `${window.fragment}?v=${this.v}`;
    },
    previewData() {
      return `https://wonbao.ews.m.jaeapp.com/wirelesspagenew/activityNew?seller_id=${window.user.id}&id=${this.md.id}`;
    }
  
  },
  methods: {
    dismiss(){
      this.md.show = false;
    },
    confirm() {
      this.dismiss();
    },
    back() {
      // alert('backdddd');
      let iframe = window.frames['previewIFrame'];
      this.v += 1;
      
      return;
      
      let href = iframe.location.href;
      console.log(href);
      if(href.indexOf('fragment.html') < 0) {
        iframe.history.go(-1);
      }
      // console.log(iframe.history.length);
      // console.log(iframe.history);
    }
    
  },
  created() {
  
  }
}
</script>

<style lang="scss">
  // content
  .dialog-preview-content-wrap{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 20px;
  }
  .dialog-preview-content{
    height: 100%;
    padding: 0 10px;
    text-align: left;
  }
  .preview-qrcode{
    padding: 20px 20px 10px 20px;
    position: absolute;
    left: 101%;
    top: 0;
    background-color: #efefef;
    div{
      font-size: 14px;
    }
  }
  
</style>