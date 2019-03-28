/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:27:21 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: yyyy-11-dd 15:04:38
 */

<template>
  <div class="dialog-goods-content scrollbar-overwrite" v-if="lastAction=='success'&&goodslist.length > 0">
    <div v-for="item,index in goodslist" class="dialog-goods-item relative">
      <table :class="['pointer', 'relative', item.num_iid == selectedGood.num_iid ? 'dialog-goods-selected-good' : '']" @click="toggleChange(item, index)">
        <tr>
          <td rowspan="3" width="35%" cellspacing="0" cellpadding="0" style="">
            <div :style="{backgroundImage:`url(${item.pic_url})`}" class="pic-display">
            </div>
          </td>
          <td class="dialog-goods-title" >
            
            <div style="height: 3em;">
              <a :href="`https://item.taobao.com/item.htm?id=${item.num_iid}`" target="_blank" @click.stop="">
                {{ item.title }}
              </a>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <span class="font12">¥</span>
            <span>{{item.price }}</span>
          </td>
        </tr>
        <tr>
          <td class="right">
            <checkbox
              v-if="mode=='add'"
              ref="checkbox"
              :value="numIids.indexOf(item.num_iid) > -1"
              @change="(checked, e, inputRef)=>{change(checked, e, index,inputRef)}">
              </checkbox>&nbsp;
            <img class="absolute dialog-goods-checked-icon" :src="checkedIcon" alt="">
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dialogG-goods-default',
  data () {
    return {
      selectedGood: {},
    }
  },
  computed: {
    md() {
      return this.$store.state.dialogGoods;
    },
    goodslist(){
      return this.md.list;
    },
    lastAction(){
      return this.md.lastAction;
    },
  },
  methods: {
    toggleChange(item, index) {
      // 如果是添加模式
      if(this.mode == 'add') {
        let checked = true;
        if(this.numIids.indexOf(item.num_iid) > -1) {
          checked = false;
        }
        this.change(checked, null, index, null);

      } else if(this.mode == 'alternative'){
        // 如果替换模式
        this.selectedGood = item;
        // console.log(JSON.stringify(item));
      }
    },
    change(checked,e,index,inputRef) {
      // 添加
      if(checked) {
        if(this.itemData.list.length < this.allowCount) {
          this.addStep();
          let item = this.tabIndex == 0 ? this.goodslist[index] : this.promotionGoodsList[index];
          let newItem = {...item};
          this.$store.dispatch('getPromotion', {item: newItem});



          
          this.$store.state.dialogGoods.itemData.list.push(newItem);
        } else {
          this.$nextTick(()=>{
            let text = `该模块最多能选择 ${this.allowCount} 个宝贝`;
            this.$store.commit('showSnackbar',{text, timeout: 1000});
            if(inputRef) {
              inputRef.checked = false;
              this.$refs.checkbox[index].checked = false;
            }
            // alert(inputRef.checked);
            // console.log(this.$refs.checkbox[index]);
          })
        }
      }else { // 删除
        this.addStep();
        let distList = (this.$store.state.dialogGoods.itemData.list).filter((item)=>{
          return item.num_iid != (this.tabIndex == 0 ? this.goodslist[index] : this.promotionGoodsList[index]).num_iid;
        });
        // console.log(distList);
        this.$store.state.dialogGoods.itemData.list = distList;
      }
    },
  },
  created() {
    
  }
}
</script>

<style lang="scss">

</style>
