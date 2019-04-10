<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item>{{position.name}}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{position.name}}{{type}}</el-breadcrumb-item>
  <el-breadcrumb-item>{{position.name}}{{myTab}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    props: [
      'myTab'
    ],
    computed: {
      ...mapState({
        position: 'position',
        type: 'type'
      })
    }
  }
</script>

<style lang="scss">

</style>
