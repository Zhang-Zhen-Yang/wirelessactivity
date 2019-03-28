/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-05 11:04:35 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-01-dd 15:32:34
 */
// 保存设置
<template>
  <div class="dialog-save-setting" >
    <p></p>
    <table cellspacing="0" cellpadding="0">
      <!--标题-->
      <tr>
        <td style="width: 100px;">
          <div class="content-item-sub-title font14">活动名称</div>
        </td>
        <td>
          <input type="text" class="content-item-input" v-model="global.title" placeholder="请输入活动名称" />
        </td>
        <td style="width: 50px;">
        </td>
      </tr>
      <!--标题-->
      <tr v-if="isAdmin">
        <td style="width: 100px;">
          <div class="content-item-sub-title font14">模板名称</div>
        </td>
        <td>
          <input type="text" class="content-item-input" v-model="templateTitle" placeholder="请输入模板名称" />
        </td>
        <td style="width: 50px;">
        </td>
      </tr>

      <!--标签-->
      <tr v-if="isAdmin">
        <td>
          <div class="content-item-sub-title font14">标签</div>
        </td>
        <td>
          <Dropdown :data="labels" :width="200" :cbChanged="labelChange" :cbCustomSelectedText="selectedLabel"></Dropdown>
        </td>
        <td>
        </td>
      </tr>
      <!--人气-->
      <tr v-if="isAdmin">
        <td style="width: 100px;">
            <div class="content-item-sub-title font14">人气</div>
        </td>
        <td>
          <input type="number" class="content-item-input" v-model="attention" placeholder="请输入人气值" />
        </td>
        <td>
        </td>
      </tr>
      <!--图片-->
      <tr v-if="isAdmin">
        <td style="width: 100px;">
            <div class="content-item-sub-title font14">图片</div>
        </td>
        <td>
          <input type="text" class="content-item-input" v-model="domeImage" placeholder="请输入图片地址" />
        </td>
        <td>
          <label class="save-img-wrap">
            <input type="file" accept=".jpg,.jpeg,.png,.gif,.bmp" @change="imagechange($event, 'domeImage')">
            <span>上传</span>
            <img :src="uploadIcon" alt="">
          </label>
        </td>
      </tr>

      <!--微淘图-->
      <tr v-if="isAdmin">
        <td style="width: 100px;">
            <div class="content-item-sub-title font14">微淘图</div>
        </td>
        <td>
          <input type="text" class="content-item-input" v-model="domeImageWeiTao" placeholder="请输入微淘图片地址" />
        </td>
        <td>
          <label class="save-img-wrap">
            <input type="file" accept=".jpg,.jpeg,.png,.gif,.bmp" @change="imagechange($event, 'domeImageWeiTao')">
            <span>上传</span>
            <img :src="uploadIcon" alt="">
          </label>
        </td>
      </tr>
      <!--焦点图-->
      <tr v-if="isAdmin">
        <td style="width: 100px;">
            <div class="content-item-sub-title font14">焦点图</div>
        </td>
        <td>
          <input type="text" class="content-item-input" v-model="domeImageJiaoDian" placeholder="请输入焦点图地址" />
        </td>
        <td>
          <label class="save-img-wrap">
            <input type="file" accept=".jpg,.jpeg,.png,.gif,.bmp" @change="imagechange($event, 'domeImageJiaoDian')">
            <span>上传</span>
            <img :src="uploadIcon" alt="">
          </label>
        </td>
      </tr>

      <!--活动时间-->
      <tr v-if="!isAdmin">
        <td>
          <div class="content-item-sub-title font14">活动时间</div>
        </td>
        <td>
          <date-range-picker :startDate="startDate" :endDate="endDate" @change="change"></date-range-picker>
        </td>
        <td>
        </td>
      </tr>
      <tr v-if="!isAdmin && getDay != null" class="save-duration">
        <td></td>
        <td>活动持续 <span class="color-tb">{{ getDay }}</span> 天 <span class="color-tb">{{ getHours }}</span> 小时 <span class="color-tb">{{ getMinutes }}</span> 分钟 <span class="color-tb">{{ getSeconds }}</span> 秒</td>
      </tr>
      <td>
      </td>
    </table>
    <saveSetDragWidget v-if="isAdmin"></saveSetDragWidget>
  </div>
</template>

<script>
import label from './label';
import saveSetDragWidget from './saveSetDragWidget.vue';
export default {
  name: 'save-content',
  components: {saveSetDragWidget},
  data () {
    return {
      // title: '',
      templateTitle: '',
      attention: 100,
      startDate: '',
      endDate: '',
      label: '其他',
      domeImage: '',
      domeImageWeiTao: '',
      domeImageJiaoDian: '',
    }
  },
  computed: {
    global(){
      return this.$store.state.data.global;
    },
    labels() {
      return label.map((item, index) => {
        return {
          label: item,
          value: item,
        }
      });
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    getDay() {
        if(this.startDate && this.endDate) {
          return ((this.endDate - this.startDate) / 3600000 / 24)<<0;
        }
        return null;
    },
    getHours() {
      if(this.startDate && this.endDate) {
        return (((this.endDate - this.startDate) % (3600000 * 24)) / 3600000)<<0; 
      }
      return null;
    },
    getMinutes() {
      if(this.startDate && this.endDate) {
        return ((this.endDate - this.startDate) % 3600000 / 60000)<<0; 
      }
      return null;
    },
    getSeconds() {
      if(this.startDate && this.endDate) {
        return ((this.endDate - this.startDate) % 60000 / 1000 )<<0; 
      }
      return null;
    },
    dialogSave() {
      return this.$store.state.dialogSave;
    },
    uploadIcon() {
      return `${window.assets}upload.svg`;
    }
  },
  methods: {
    change(res) {
      this.startDate = res[0];
      this.endDate = res[1];
    },
    labelChange(e) {
      console.log(e);
      this.label = e[0].value;
    },
    selectedLabel() {
      return this.label;
    },
    getValue() {
      return {
        title: this.global.title,
        templateTitle: this.templateTitle,
        attention: this.attention,
        label: this.label,
        startDate: this.startDate,
        endDate: this.endDate,
        domeImage: this.domeImage,
        domeImageWeiTao: this.domeImageWeiTao,
        domeImageJiaoDian: this.domeImageJiaoDian,
      }
    },
    imagechange(e, type) {
      let files = e.target.files;
      if(files.length > 0) {
        let formdata=new FormData();
        formdata.append('imgUpload', files[0]);
        formdata.append('taobao_url', '');
        // formdata.append('WONBAO_USER_SESSION_ID', 105227988);
        // formdata.append('WONBAO_USER_SESSION_ID', 105284763);
        e.target.value = '';
        this.$store.dispatch('saveImageUpload', {formdata, type: 'cover', callback: (link) => {
          this[type] = link;
        }})
      }
    }
  },
  created() {
    this.title = this.dialogSave.title;
    this.attention = this.dialogSave.attention;
    this.domeImage = this.dialogSave.domeImage;
    this.label = this.dialogSave.label;
    this.domeImageWeiTao = this.dialogSave.domeImageWeiTao;
    this.domeImageJiaoDian = this.dialogSave.domeImageJiaoDian;
    this.startDate = this.dialogSave.startDate;
    this.endDate = this.dialogSave.endDate;
    this.templateTitle = this.dialogSave.templateTitle;
  }
}
</script>

<style lang="scss">
  .dialog-save-setting{
    .hsy-dropdown{
      font-size: 12px;
      font-family: 微软雅黑;
      .selected{
        height: 34px;
        line-height: 34px;
      }
    }
    table{
      table-layout: fixed;
      width: 100%;
      td{
        padding: 5px 10px;
      }
    }
    .mx-calendar-icon{
      height: 20px;
    }
  }
  .save-duration{
    td{
      padding: 0;
      font-size: 14px;
    }
  }
  .save-img-wrap{
    display: block;
    color: #1284e7;
    text-align: center;
    cursor: pointer;
    input{
      display: none;
    }
    span{
      font-size: 12px;
    }
    img{
      width: 20px;
    }
  }
</style>
