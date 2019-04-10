<template>
    <div class="page-detail">
      <el-row>
        <crumbs class="m-crumbs" :myTab="tab"/>
      </el-row>
      <el-row>
        <sum-card :datas="myData"/>
      </el-row>
      <el-row>
        <el-col :span="19">
          <el-row>
            <deal :dealItems="myDealItems"/>
          </el-row>
          <el-row>
            <recommend :recommends="recommend"/>
          </el-row>
          <el-row>
            <comment :comments="comment"/>
          </el-row>
        </el-col>
        <el-col :span="5">
          <you-like style="margin-top: 10px"/>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import api from '@/api'
  import crumbs from '@/components/detail/crumbs'
  import sumCard from '@/components/detail/sumCard'
  import deal from '@/components/detail/deal'
  import comment from '@/components/detail/comment'
  import recommend from '@/components/detail/recommend'
  import YouLike from '@/components/like'
    export default {
    data(){
      return {
        tab: '',
        myData: {},
        myDealItems: [],
        recommend: [],
        comment
      }
    },
      created(){
        api.getDetail().then(res => {
          console.log(res)
          this.tab = res.data.data.tab[0]
          this.myData = res.data.data
          this.myDealItems = res.data.data.dealItems
          this.recommend = res.data.data.recommend
          this.comment = res.data.data.comment
        })
      },
      components: {
        crumbs,
        sumCard,
        deal,
        comment,
        YouLike,
        recommend
      }
    }
</script>

<style lang="scss">
  @import "@/assets/css/detail/index.scss";
</style>
