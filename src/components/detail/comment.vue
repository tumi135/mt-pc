<template>
  <div class="m-detail-list">
    <h3>网友点评</h3>
    <ul>
      <li class="comment-list" v-for="(item,index) in comments" :key="index">
        <div class="header">
          <img :src="item.image">
        </div>
        <div class="info">
          <p>{{item.username}}</p>
          <p>
            <el-rate v-model="item.rate" disabled text-color="#ff990"></el-rate>
          </p>
          <div class="desc">{{item.evalaute}}</div>
          <change-img :pics="item.pics"/>
        </div>
      </li>
      <li class="comment-list" v-for="(item,index) in comments" :key="index">
        <div class="header">
          <img :src="item.image">
        </div>
        <div class="info">
          <p>{{item.username}}</p>
          <p>
            <el-rate v-model="item.rate" disabled text-color="#ff990"></el-rate>
          </p>
          <div class="desc">{{item.evalaute}}</div>
          <change-img :pics="item.pics"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import changeImg from '@/components/detail/changeImg'
    export default {
        props:['comments'],
      components: {
        changeImg
      }
    }
</script>

<style scoped>

</style>
