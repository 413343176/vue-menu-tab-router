import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Root',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/main',
      name: 'Main',
      //当一个组件包含子路由时，<router-view>必须在该组件中出现
      component: () => import('@/components/Main'),
      children: [{
        path: '/home',
        name: 'Home',
        component: () => import('@/components/Home'),
      }, {
        path: '/page1',
        name: 'Page1',
        component: () => import('@/components/Page1'),
      }, {
        path: '/page2',
        name: 'Page2',
        component: () => import('@/components/Page2'),
      }, {
        path: '/page3',
        name: 'Page3',
        component: () => import('@/components/Page3'),
      }, {
        path: '/page4',
        name: 'Page4',
        component: () => import('@/components/Page4'),
      }]
    }
  ]
})