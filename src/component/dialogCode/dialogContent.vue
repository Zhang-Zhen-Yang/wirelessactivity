/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-01 15:36:47 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-27 10:43:14
 */

<template>
<!--content-->
  <div class="dialog-code-content-wrap"  >
    <div class="dialog-code-display-space scrollbar-overwrite" v-html="localCode || code">
     
    </div>
    <div class="dialog-code-content" ref="editorContent">
  
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialog-code-content',
  data () {
    return {
      localCode: '',
    }
  },
  computed: {
    md() {
      return this.$store.state.dialogCode;
    },
    code() {
      return this.md.data.code;
    }
  },
  methods: {
    render() {
      let dom = this.$refs.editorContent;
      try{
        if(!this.monacoEditor) {
          this.monacoEditor = monaco.editor.create(dom, {
            value: this.code,
            language: 'html',
            wrappingColumn: 0,
            // wrappingIndent: "indent",
            automaticLayout: true,
            renderIndentGuides: false,
            // rulers: [0,4,8,12,16,20,24,28],
          });
          this.monacoEditor.onDidChangeModelContent((e)=>{
            let value = this.monacoEditor.getValue();
            this.localCode = value;
            if(e.isRedoing){
              
            }else if(e.isUndoing){
              
            }else {
              // console.log(value);
            }
          })
        }
      } catch (e){

      }
    },
    getValue() {
      return this.localCode || this.code;
    }
  },

  created() {
  },
  mounted() {
    this.render();
    this.$nextTick(() => {
      setTimeout(()=>{
        this.monacoEditor.setValue(this.code);
      }, 1000)
      
    })
  }
}
</script>

<style lang="scss">
// content
.dialog-code-content-wrap{
  text-align: left;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 60px;
}
.dialog-code-content{
  float: right;
  width:70%;
  height: 100%;
  padding-left:0;
  text-align: left;
  padding-bottom: 10px;
}
.dialog-code-display-space{
  float: left;
  width:30%;
  height: 100%;
  background-color: #fefefe;
  overflow: auto;
}
.dialog-code-content{
  background-color:red;
}
</style>
