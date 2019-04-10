<template>
    <dl class="m-like">
      <dt>猜你喜欢</dt>
      <dd v-for="item in likeList" :key="item.itemId">
        <img :src="item.imgUrl">
        <h3>
          <router-link :to="{name: 'deatil',params: {itemId:2571323}}">{{item.title}}</router-link>
        </h3>
        <p>
          <el-rate v-model="item.score" disabled text-color="#ff990"></el-rate>
          <span class="commentNum">{{item.commentNum}}人评论</span>
        </p>
        <p class="commentNum">{{item.areaName}}</p>
        <p class="price">￥{{item.lowPrice}}起</p>
      </dd>
    </dl>
</template>

<script>
  import api from '@/api'
    export default {
        data(){
          return {
            likeList: []
          }
        },
      created() {
        api.recommendList().then(res => {
          this.likeList = res.data.data
          console.log(this.likeList)
        })
      }
    }
</script>

<style lang="scss">
  @import "@/assets/css/products/like.scss";
  /*dl{*/
    /*box-sizing: border-box;*/
    /*margin-top: 10px;*/
    /*margin-left: 10px;*/
    /*background: #FFF;*/
    /*border: 1px solid #E5E5E5;*/
    /*border-radius: 4px;*/
    /*color: #333;*/
    /*font-size: 14px;*/
    /*line-height: 20px;*/
    /*padding: 11px 20px;*/
  /*}*/

  /*dd{*/
    /*margin-top: 10px;*/
  /*}*/
  /*img{*/
    /*width: 200px;*/
    /*height: 125px;*/
    /*overflow: hidden;*/
  /*}*/
  /*dd .el-rate{*/
    /*display: inline-block;*/
  /*}*/
  /*.commentNum{*/
    /*font-size: 12px;*/
    /*padding-right: 10px;*/
    /*color: #999;*/
  /*}*/
  /*.price{*/
    /*font-size: 15px;*/
    /*color: #f60;*/
    /*margin-right: 10px;*/
  /*}*/

</style>
