/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:29:08 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-03 10:07:56
 */

<template>
  <div class="temp">
    <div class="content-item-title">焦点图模块</div>
    <div class="content-item-wrap">
      <div class="content-item-sub-title">模块高度</div>
      <!-- <input type="number" class="content-item-input" v-model="itemData.height" step="10" min="1">-->
      <w-input type="number" class="" v-model="itemData.height" step="10" min="1" />
      <template v-for="item,index in itemData.list">
        <div class="content-item-sub-title">图片</div>
        <mask-replace
          :text="'重新选择'"
          :showActions="true"
          :index="index"
          :count="itemData.list.length"
          @select="select(index)"
          @setAction="setAction"
        >
          <img v-if="item.pic_url" :src="item.pic_url" alt="" class="content-item-img">
          <empty-layout v-if="!item.pic_url" />
        </mask-replace>
        <p></p>
        <div class="content-item-sub-title">链接</div>
        <div class="relative">
          <w-input type="text" class="" v-model="item.link" placeholder="请输入链接" />
          <link-icon :itemData="itemData" :itemIndex="index"></link-icon>
        </div>
      </template>
      <p></p>
      <add-btn @click="add">图片</add-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: 'content-focusimg',
  props: {
    itemData:{
      type: Object,
      default() {
        return {
          name: '',
          title: 'ddd',
          link:'ddddeeee',
          list: [
            {
              pic_url: 'ddd',
              link: ''
            }
          ]
        }
      }
    },
    activeIndex: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {
    add() {
      this.itemData.list.push({
        pic_url: '',
        link: '',
      })
    },
    select(index){
      // alert('select');
      this.$store.state.dialogImage.show = true;
      this.$store.state.dialogImage.itemData = this.itemData;
      this.$store.state.dialogImage.itemIndex = index;
      // this.$store.commit('showDialogImage');

    },
    setAction({type, index}){
      // alert(type);
      let pickItem;
      switch(type){
        case 'u':
          if(index == 0) {
						return;
					}
					pickItem = this.itemData.list.splice(index, 1);
					this.itemData.list.splice(index - 1,0,pickItem[0]);
          break;
        case 'd':
          pickItem = this.itemData.list.splice(index + 1, 1)
					this.itemData.list.splice(index,0,pickItem[0]);
          break;
        case 'del':
          this.itemData.list.splice(index, 1);
          break;
        default:;
      }
    }
  },
  created() {
    // console.log('created');
  }
}
</script>

<style lang="scss">

</style>
