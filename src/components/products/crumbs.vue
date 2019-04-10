<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>{{position.name}}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{position.name}}{{$route.params.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
    export default {
        computed: {
          ...mapState({
            position: 'position'
          })
        }
    }
</script>

<style lang="scss">

</style>
