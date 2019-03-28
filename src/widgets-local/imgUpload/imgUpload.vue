/*
 * @Author: zhangzhenyang 
 * @Date: yyyy-12-dd 15:40:00 
 * @Last Modified by:   zhangzhenyang 
 * @Last Modified time: yyyy-12-dd 15:40:00 
 */
// 图片上传
<template>
  <label class="img-upload-widget">
    <input type="file" accept=".jpg,.jpeg,.png,.gif,.bmp" @change="imagechange($event)">
    <span>上传</span>
    <img :src="uploadIcon" alt="">
  </label>
</template>

<script>
export default {
  name: 'img-upload',
  data () {
    return {
    }
  },
  computed: {
    uploadIcon() {
      return `${window.assets}upload.svg`;
    }
  },
  methods: {
    click(){
      // this.$emit('click');
    },
    imagechange(e) {
      let files = e.target.files;
      if(files.length > 0) {
        let formdata=new FormData();
        formdata.append('imgUpload', files[0]);
        formdata.append('taobao_url', '');
        // formdata.append('WONBAO_USER_SESSION_ID', 105227988);
        // formdata.append('WONBAO_USER_SESSION_ID', 105284763);
        e.target.value = '';
        /* this.$store.dispatch('saveImageUpload', {formdata, callback: (link) => {
          this[type] = link;
        }})*/
        this.$emit('upload', formdata);
      }
    }   
  },
  created() {
  }
}
</script>

<style lang="scss">
  .img-upload-widget{
    display: inline-block;
    font-size: 14px;
    line-height: 14px;
    cursor:pointer;
    input{
      display: none;
    }
    img{
      width: 20px;
      vertical-align: middle;
    }
  }
</style>
