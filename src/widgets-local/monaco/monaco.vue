/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:42:53 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 13:58:09
 */
// monaco 编辑器
<template>
  <div class="monaco" v-show="show" @keydown="kd">
    <div class="monaco-top">
      <table>
        <tr>
          <td class="monaco-title">
            {{ item ? '组件' : '全局样式' }}
          </td>
          <td class="font12" v-if="item">
            <span :class="['pointer', itemIndex == 0 ? 'active-widget-part' : 'inactive-widget-part' ]" @click="setItemIndex(0)">
              &nbsp;
              html
              &nbsp;
            </span>
          </td>
          <td class="font12" v-if="item">
            <span :class="['pointer', itemIndex == 1 ? 'active-widget-part' : 'inactive-widget-part']" @click="setItemIndex(1)">
              &nbsp;
              style
              &nbsp;
            </span>
          </td>
          <td class="middle" v-if="item">
            <div class="widget-thumbnail-edit">
              
                <span class="inactive-widget-part font12 pointer" @click="modifyThumbnail">&nbsp;缩略图&nbsp;</span>
                <img-upload @upload="uploadImg"></img-upload>
              
              <!-- <input type="text" v-model="item.image">-->
            </div>          
          </td>
          <td class="middle is-publish" v-if="item">
            <span class="font12">开放</span>
            <toggle :toggleVal="item.p" @toggle="(r)=>{ item.p = r; }"></toggle>
          </td>
          <td class="right" v-if="item">
            <button class="btn primary btn-save-widget" @click="save">
              保存
            </button>
          </td>
          <td class="right">
            <div class="monaco-dismiss pointer" @click="dismiss">
              &times;
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div ref="editorContent" class="monaco-content" v-show="!item">
    </div>
    <div ref="editorContentHtml" class="monaco-content" v-show="item && itemIndex == 0">
    </div>
    <div ref="editorContentStyle" class="monaco-content" v-show="item && itemIndex == 1">
    </div>
  </div>
</template>

<script>
export default {
  name: 'monaco',
  components: {},
  data () {
    return {
      itemIndex: 0,
    }
  },
  computed: {
    show(){
      return this.$store.state.modals[1].show;
    },
    item() {
      return this.$store.state.modals[1].item;
    },

    style:{
      set(e){
        this.$store.state.data.style = e;
      },
      get(){
        return this.$store.state.data.style;
      }
    },
    widgetTemplate() {
      if(this.item) {
        return this.item.template;
      }
      return '';
    },
    widgetStyle() {
      if(this.item) {
        return this.item.style;
      }
      return '';
    }    
  },
  methods: {
    dismiss() {
      this.$store.state.modals[1].show = false;
    },
    kd(e){
      if(e.which == 83 && e.ctrlKey){
        e.preventDefault();
        let value = this.monacoEditor.getValue();
        localStorage.setItem('monaco-style', value);
        this.style = value;

        if(this.item) {
          // 1
          let value1 = this.monacoEditorHtml.getValue();
          localStorage.setItem('monaco-widget-html', value1);
          this.item.template = value1;
          // 2
          let value2 = this.monacoEditorStyle.getValue();
          localStorage.setItem('monaco-widget-style', value2);
          this.item.style = value2;
          try {
            this.$store.dispatch('registerWidget', {item: this.item, force: true});
          } catch(e){
            alert('error');
          }

        }
      }
      // console.log(e);
    },
    // 保存
    save() {
      // this.$store.dispatch('updateDynamic', {item: this.item});
      this.$store.dispatch('updateTemplateStyle', {item: this.item});
    },
    render() {
      console.log('---------------------------------------------')
      let dom = this.$refs.editorContent;
      let dom1 = this.$refs.editorContentHtml;
      let dom2 = this.$refs.editorContentStyle;
      // 0========================
      try{
        if(!this.monacoEditor) {
          this.monacoEditor = monaco.editor.create(dom, {
              value: this.style,
              language: 'css',
              wrappingColumn: 0,
              wrappingIndent: "indent",
              automaticLayout: true,
              renderIndentGuides: false,
              // rulers: [0,4,8,12,16,20,24,28],
          });
          this.monacoEditor.onDidChangeModelContent((e)=>{        
            if(e.isRedoing){
              
            }else if(e.isUndoing){
              
            }else {
              
            }
          })

        } else {
        
        }

      }catch(e){
        console.warn(e);
      }

      // 1============================
      try{
        if(!this.monacoEditorHtml) {
          this.monacoEditorHtml = monaco.editor.create(dom1, {
              value: '',
              language: 'html',
              wrappingColumn: 0,
              wrappingIndent: "indent",
              automaticLayout: true,
              renderIndentGuides: false,
              "emmet.showExpandedAbbreviation": "always"
              // rulers: [0,4,8,12,16,20,24,28],
          });
          this.monacoEditorHtml.onDidChangeModelContent((e)=>{        
            // console.log(e);
            // let value = this.monacoEditor.getValue();
            // console.log(value);
            if(e.isRedoing){
              
            }else if(e.isUndoing){
              
            }else {
              
            }
          })

        } else {
        
        }

      }catch(e){
        console.warn(e);
      }
      // 2=============================
      try {
        if(!this.monacoEditorStyle) {
          this.monacoEditorStyle = monaco.editor.create(dom2, {
              value: '',
              language: 'css',
              wrappingColumn: 0,
              wrappingIndent: "indent",
              automaticLayout: true,
              renderIndentGuides: false,
              // rulers: [0,4,8,12,16,20,24,28],
          });
          this.monacoEditorStyle.onDidChangeModelContent((e)=>{        
            // console.log(e);
            // let value = this.monacoEditor.getValue();
            // console.log(value);
            if(e.isRedoing){
              
            }else if(e.isUndoing){
              
            }else {
              
            }
          })

        } else {
        
        }

      } catch (e) {

      }

    },
    setItemIndex(index) {
      this.itemIndex = index;
      this.render();
    },
    // 修改缩略图
    modifyThumbnail() {
      let result = prompt('修改缩略图', this.item.image);
      if(result == null) return;
      this.item.image = result;
    },
    // 上传缩略图
    uploadImg(formdata) {
      this.$store.dispatch('saveImageUpload', {formdata, type: 'thumbnail', callback: (link) => {
        this.item.image = link;
      }})
    }

  },
  mounted(){
    this.render();
    this.$nextTick(() => {
      setTimeout(()=>{
        this.monacoEditor.setValue(this.style);
        this.monacoEditorHtml.setValue(this.widgetTemplate);
        this.monacoEditorStyle.setValue(this.widgetStyle);
      }, 1000)
      
    })
    try{
      window.$(()=>{
        window.$('.monaco')
        .resizable({
          handles: 'ne, se, nw, sw',
        })
        .draggable({
          handle: ".monaco-top",
          // containment: '#app',
          stop: function(){
            let _this = $(this);
            let top = _this.offset().top;
            let left = _this.offset().left;
            let width = _this.width();
            let appNode = $('#app');
            let appNodeHeight = appNode.height();
            let appNodeWidth = appNode.width();
            // 判断上下位置
            if( top < 0) {
              _this.css({
                top: 0
              })
            } else if(top > (appNodeHeight - 50)){
              _this.css({
                top: appNodeHeight - 50
              })
            }
            // 判断左右位置
            if(left < (50-width)) {
              _this.css({
                left: 50 - width
              })
            } else if(left > (appNodeWidth - 50)){
              _this.css({
                left: appNodeWidth - 50
              })
            }
            console.log(_this.offset().top);
            // alert('ddd');
          }
        });
      })
    }catch(e){
      console.error(e);
    }
  },
  watch:{
    show(n, o){
      if(n){
        
      }
      // console.log(n);
    },
    widgetTemplate(n,o) {
      if(n != this.monacoEditorHtml.getValue()) {
        this.monacoEditorHtml.setValue(n);
      }
    },
    widgetStyle(n,o) {
      if(n != this.monacoEditorStyle.getValue()) {
        this.monacoEditorStyle.setValue(n)
      }
    },
    style(n){
      if(n != this.monacoEditor.getValue()) {
       this.monacoEditor.setValue(n);
      }
    }
  }
}
</script>

<style lang="scss">
  .monaco{
    position: fixed;
    width: 630px;
    height:100%;
    border:1px solid #dddddd;
    z-index: 90;
   
    padding-top: 50px;
    &>.monaco-content{
      height: 100%;
      background-color: white;
    }
    .monaco-top{
      width:100%;
      height: 50px;
      position: absolute;
      top:0;
      left:0;
      background-color: #7D8699;// #1284e7;
      color: white;
      cursor: move;
      table{
        width: 100%;
      }
    }
    .monaco-title{
      font-size: 20px;
      padding-left:20px;
    }
    .monaco-dismiss{
      padding: 0px 10px;
      display: inline-block;
      margin-right: 10px;
      font-size: 30px;
      &:hover{
        color: #f7342a;
      }
    }
    .active-widget-part, .inactive-widget-part{
      display: inline-block;
      border: 2px solid white;
      padding: 3px;
      height: 26px;
      line-height: 15px;
      border-radius: 13px;
    }
    .active-widget-part{
      color:#7D8699;
      background-color:  white;

    }
    .inactive-widget-part{

    }
    .widget-thumbnail-edit{
      &>span{
        background-color: #1284e7;
        border-color: #1284e7;
      }
    }
    .is-publish{
      .toggle{
        vertical-align: 0px;
      }
    }
    .btn-save-widget{
      padding: 10px 15px;
      font-size: 14px;
    }
  }
</style>
