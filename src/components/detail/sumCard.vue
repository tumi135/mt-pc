<template>
  <dl class="m-sum-card">
    <dt>
      <h1>
        {{datas.title}}
      </h1>
      <el-rate v-model="datas.score" disabled text-color="#ff990"></el-rate>
      <span class="">{{datas.score}}分</span>
      <span class="">人均￥{{datas.avgPrice}}</span>
      <ul>
        <li>地址：{{datas.address}}</li>
        <li>电话：{{datas.phone}}</li>
        <li>营业时间：{{datas.businessTime}}</li>
      </ul>
      <ul>
        <li v-for="(item,index) in datas.service" :key="index" class="service">
          <img v-if="item == '提供wifi'" src="http://p0.meituan.net/codeman/551290739062eda37e52999e2315f50c1887.png">
          {{item}}
        </li>
      </ul>
    </dt>
    <dd>
      <div class="big">
        <img :src="datas.imgUrl">
      </div>
      <ul>
        <li>
          <img :src="datas.imgUrl">
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
    export default {

      props:[
        'datas'
      ]
    }
</script>

<style scoped>

</style>
