<template>
  <div class="imgs">
    <div class="img-box">
      <div  v-for="(v,i) in pics" :key="i" :class="{'active': i == active}">
        <img  :src="v" @click="changImg(v,i)" >
      </div>
    </div>
    <div class="big-img" v-if="bigImg">
      <img :src="bigImg" @click="close">
    </div>
  </div>
</template>

<script>
    export default {
      props:['pics'],
      data(){
        return {
          bigImg: '',
          active: null
        }
      },
      methods: {
        changImg(img,i) {
          if(this.active == i){
            this.bigImg = ''
            this.active = null
          }else {
            this.bigImg = img
            this.active = i
          }
        },
        close(){
          this.bigImg = ''
          this.active = null
        }
      }
    }
</script>

<style scoped>

</style>
