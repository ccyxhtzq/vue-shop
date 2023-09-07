import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from'../components/Welcome'
import Users from'../components/user/Users'
import Lists from'../components/user/Lists'
import Pass from'../components/pass/Pass'
import Dopass from'../components/pass/Dopass'
import Datalist from'../components/Datalist'
import Shoplist from'../components/Shoplist'
import Mylove from'../components/Mylove'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path:'/',redirect:'/login'
    },
    {
      path:'/login',component:Login
    },
    {
      path:'/home',component:Home,
      redirect:'/welcome',

      children:[
        {
          path:'/welcome',component:Welcome
        },{
          path:'/Users',component:Users
        },
        {
          path:'/Lists',component:Lists
        },
        {
          path:'/Pass',component:Pass
        },
        {
          path:'/Dopass',component:Dopass
        },
        {
          path:'/Datalist',component:Datalist
        },
        {
          path:'/Shoplist',component:Shoplist
        },
        {
          path:'/Mylove',component:Mylove
        }
      ]
    }
  ]
})
