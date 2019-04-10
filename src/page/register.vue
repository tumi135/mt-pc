<template>
    <div class="page-register">
      <div class="header">
        <header>
          <router-link :to="{name: 'indexPage'}" class="site-logo" ></router-link>
          <div class="login">
            <span>已有美团账号</span>
            <router-link :to="{name: 'login'}">登录</router-link>
          </div>
        </header>
      </div>
      <div class="content">
        <el-form :model="registerForm" status-icon :rules="rules2" ref="registerForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="userName">
            <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="registerForm.password" autocomplete="off" @input="input"></el-input>
            <div class="pw-strength">
              <div :class="['bar', strengthClass]"></div>
              <div class="letter">
                <span>弱</span>
                <span>中</span>
                <span>强</span>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="确认密码" prop="rePassword">
            <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      <footer></footer>
    </div>
</template>

<script>
  import api from '@/api'
    export default {
      data() {
        var validateUser = (rule, value, callback) => {
          if(value == ''){
            callback(new Error('请输入用户名'))
          }else if (value.length < 4 || value.length > 16){
            callback(new Error('用户名必须为4-16位的字母数字下划线组成'))
          }else {
            callback()
          }
        }
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'))
          }else if (value.length < 4 || value.length > 16){
            callback(new Error('密码必须为4-16位'))
          } else {
            if (this.registerForm.rePassword !== '') {
              this.$refs.registerForm.validateField('rePassword')
            }
            callback()
          }
        }
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'))
          } else if (value !== this.registerForm.password) {
            callback(new Error('两次输入密码不一致!'))
          } else {
            callback()
          }
        }
        return {
          registerForm: {
            userName: '',
            password: '',
            rePassword: ''
          },
          strengthClass: '',
          rules2: {
            userName: [
              {validator: validateUser, trigger: 'blur'}],
            password: [
              { validator: validatePass, trigger: 'blur' }
            ],
            rePassword: [
              { validator: validatePass2, trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        submitForm(formName) {
          console.log('aab')
          this.$refs[formName].validate((valid) => {
            if (valid) {
              api.register({
                params: this.registerForm
              }).then(res => {
                if(res.data.status == 'success'){
                  let sel = this
                  alert('注册成功！')
                  setTimeout(function () {
                    sel.$router.push({name: 'login'})
                  },1000)
                }else {
                  alert(res.data.msg)
                }
              })
            } else {
              console.log('error submit!!')
              return false;
            }
          })
        },
        input(){
          var reg = /^[A-Za-z_]+$/g
          var stongth = this.registerForm.password.match(reg)
          if(!this.registerForm.password) {
            this.strengthClass = ''
            return false
          }
          if(this.registerForm.password.length > 15 || (stongth && this.registerForm.password.length > 10)) {
            this.strengthClass = 'strong'
          }else if(this.registerForm.password.length > 10 ||(this.registerForm.password.length >8 && this.registerForm.password.length <10 && stongth)){
            this.strengthClass = 'normal'
          }else {
            this.strengthClass = 'week'
          }
        }
      }
    }
</script>

<style lang="scss">
  @import "@/assets/css/register/index.scss";
</style>
