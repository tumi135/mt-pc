<template>
    <div class="m-header">
      <el-row>
        <top-bar/>
      </el-row>
      <el-row>
        <search-bar/>
      </el-row>
    </div>
</template>

<script>
  import SearchBar from './searchBar'
  import TopBar from './topBar'
    export default {
        components: {
          TopBar,
          SearchBar

        }
    }
</script>

<style lang="scss">
  @import "@/assets/css/public/header/index.scss";
  @import "@/assets/css/public/header/search.scss";
</style>
