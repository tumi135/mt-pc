<template>
    <div class="page-login">
      <div class="login-header">
        <router-link class="logo" :to="{name: 'indexPage'}"></router-link>
      </div>
      <div class="login-panel">
        <div class="banner">
          <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg">
        </div>
        <div class="form">
          <h4 v-if="error" class="tips">{{error}}</h4>
          <p>
            <span>账号登录</span>
          </p>
          <el-input v-model="userName" :class="{error: error&&!userName}" placeholder="手机号/用户名/邮箱" class="userName" prefix-icon="profile"></el-input>
          <el-input v-model="password" type="password" placeholder="密码" :class="{error: error&&!password}" prefix-icon="password"></el-input>
          <div class="foot">
            <a href="#">忘记密码</a>
          </div>
          <el-button type="primary" class="btn-login" @click="submit">登录</el-button>
          <p class="reg">
            <span>还没有账号？</span>
            <router-link :to="{name: 'register'}">免费注册</router-link>
          </p>
          <div class="oauth-wrapper">
            <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
            <div class="oauth cf">
              <a class="oauth__link oauth__link--qq" href="/account/connect/tencent" data-mtevent='{"la":"oauth/qq"}'  target="_blank"></a>
              <a class="oauth__link oauth__link--weibo" href="/account/connect/sina" data-mtevent='{"la":"oauth/sina"}' target="_blank"></a>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="site-info-nav cf">
          <ul>
            <li class="first"><a rel="nofollow" href="#">关于美团</a></li>
            <li><a rel="nofollow" href="#">加入我们</a></li>
            <li><a rel="nofollow" href="#">商家入驻</a></li>
            <li><a rel="nofollow" href="#">帮助中心</a></li>
            <li class="last"><a href="#">美团手机版</a></li>
          </ul>
        </div>
          <p>
            &copy;<span>2019</span>
            <a href="https://www.meituan.com">美团网团购</a>
            meituan.com
            <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP证070791号</a>
            京公网安备11010502025545号
          </p>
      </footer>
    </div>
</template>

<script>
  import api from '@/api'
    export default {
        data() {
          return {
            userName: '',
            password: '',
            error: ''
          }
        },
      methods: {
        submit() {
          if(!this.userName){
            this.error = '请输入账号'
            return false
          }
          if(!this.password){
            this.error = '请输入密码'
            return false
          }
          api.login({
            params: {
              userName: this.userName,
              password: this.password
            }
          }).then(res => {

            if(res.data.status == 'success'){
              this.$store.commit('setUserName',this.userName)
              this.$router.push({name: 'indexPage'})
            }else {
              this.error = res.data.msg
            }
          })
        }
      }
    }
</script>

<style lang="scss">
  @import "@/assets/css/login/index.scss";
</style>
