<template>
    <div class="m-detail-list">
      <h3>推荐菜</h3>
      <div class="m-recommend">
        <span v-for="item in recommends" :key="item" class="clear">{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        props: ['recommends']
    }
</script>

<style scoped>

</style>
