<template>
    <div class="page-changeCity">
      <el-row>
        <province/>
      </el-row>
      <el-row>
        <hot title="热门城市" :list="hotList"/>
      </el-row>
      <el-row>
        <hot title="最近访问" :list="rencentList"/>
      </el-row>
      <el-row>
        <category/>
      </el-row>
    </div>
</template>

<script>
  import Province from '@/components/changeCity/province'
  import hot from '@/components/changeCity/hot'
  import Category from '@/components/changeCity/category'
    export default {
        data(){
          return {
            hotList: ["长沙","株洲","湘潭","衡阳","邵阳"],
            rencentList: ["新宁","蓝山","衡阳县","石门","宁远县","华容"]
          }
        },
        components: {
          Province,
          hot,
          Category
        }
    }
</script>

<style lang="scss">
  @import '@/assets/css/changecity/hot.scss';
</style>
