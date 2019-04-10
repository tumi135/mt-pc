import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DefaultPage from '@/layout/default'
import BlankPage from '@/layout/blank'
import IndexPage from '@/page/index'
import ChangeCity from '@/page/changeCity'
import GoodsList from '@/page/goodsList'
import Login from '@/page/login'
import Register from '@/page/register'
import Detail from '@/page/detail'

Vue.use(Router)

export default new Router({
routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: DefaultPage,
      redirect: '/indexPage',
      children: [{
        path: '/indexPage',
        name: 'indexPage',
        component: IndexPage
      },{
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      },{
        path: 's/:name',
        name: 'goodsList',
        component: GoodsList
      },{
        path: '/detail/:itemId',
        name: 'deatil',
        component: Detail
      }]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: BlankPage,
      children: [{
        path: '/login',
        name: 'login',
        component: Login
      },{
        path: 'register',
        name: 'register',
        component: Register
      }]
    }
  ]
})
