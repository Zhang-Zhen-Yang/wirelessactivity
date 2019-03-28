/*
 * @Author: zhangzhenyang 
 * @Date: 2018-10-31 15:28:49 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-06 14:10:57
 */

// 旺店宝优惠券
<template>
  <div class="promotion-meal-wb">
    <div v-for="item, index in list" class="promotion-meal-item" v-if="lastAction=='success'" style="width: 100%;">
      <!--<div :style="{backgroundImage: `url(${item.thumbnail})`}" class="pointer">
      </div>-->
      
      <table style="width: 100%;">
        <tr>
          <td rowspan="2">
            <div :style="{backgroundImage: `url(${item.thumbnail})`}" class="promotion-meal-item-image">
            </div>
          </td>
          <td class="font14">
            <a :href="link(item)" target="_blank">{{ item.title }}</a>
          </td>
          <td rowspan="2">
            <div class="font18 color-red">￥{{ item.json ? item.json.mealPrice : '--'}}</div>
            <div class="font14" style="text-decoration: line-through">￥{{ item.json ? item.json.totalPrice : '--'}}</div>
          </td>
          <td rowspan="2">
            <span class="pointer color-primary font14" @click="select(item);">选择套餐</span>
          </td>
        </tr>
        <tr>
          <td class="font14">
            {{ item.created }}
          </td>
        </tr>
      
      </table>
    </div>

    <content-notice :lastAction="lastAction" :count="count"></content-notice>
    <!-- <img src="http://imgs.aixifan.com/content/2018_10_23/1.5402501695298846E9.png" alt="">
    <img src="http://imgs.aixifan.com/content/2018_10_23/1.5402501810002608E9.png" alt="">-->
  </div>
</template>

<script>
export default {
  name: 'promotion-meal-wb',
  components: { },
  data () {
    return {
    }
  },
  computed: {
    promotionMeal(){
      return this.$store.state.promotionMeal;
    },
    data() {
      return this.promotionMeal.tabWb;
    },
    list() {
      return this.data.list || [];
    },
    lastAction() {
      return this.data.lastAction;
    },
    count() {
      return this.list.length;
    },

  },
  methods: {
    init() {
      this.$store.dispatch('getPromotionMealPlan', {pageNo: 1})
    },
    link(item) {
      return `https://wonbao.ews.m.jaeapp.com/meal/index?sellerId=${window.user.id}&mealId=${item.id}`;
    },
    select(item) {
      console.log(item);
      this.$store.dispatch('addStep');
      this.$store.state.promotionMeal.itemData.list = item.json ? item.json.babyList.map((i)=>{
        return {
          pic_url: i.picPath,
          title: i.title,
          price: i.price,
          num_iid: i.numIid,
        }
      }) : [];
      this.promotionMeal.itemData.total_price = item.json ? item.json.totalPrice : '--';
      this.promotionMeal.itemData.meal_price = item.json ? item.json.mealPrice : '--';
      this.promotionMeal.itemData.id = item.id;
      this.promotionMeal.itemData.link = `https://wonbao.ews.m.jaeapp.com/meal/index?sellerId=${window.user.id}&mealId=${item.id}`;
      this.promotionMeal.itemData.title = item.title;
      this.promotionMeal.show = false;


      // link: https://wonbao.ews.m.jaeapp.com/meal/index?sellerId=105227988&mealId=120444
    }
  },
  created() {
    if(this.lastAction == 'error' || this.list.length == 0) {
      this.init();
    }
  }
}
</script>

<style lang="scss">
  .promotion-meal-item{
    display: inline-block;
    // width: 33.3%;
    padding: 5px 5px;
    border-bottom: 1px solid #cccccc;
    &:first-child{
      border-top: 1px solid #cccccc;
    }
    &>div{
      // background-color: orange;
      height: 150px;
      color: white;
      font-size: 12px;
      background-position: center center;
      background-repeat:no-repeat;
      background-size: cotain;
      border: 1px solid #cccccc;
      &:hover{
        border: 1px solid #1284e7;
      }
    }
    table{
    }
    td{
      padding: 3px;
    }
  }
  .promotion-meal-item-image{
    width: 200px;
    height: 80px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
