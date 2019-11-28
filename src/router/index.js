import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    components:{
      main: () => import('@/views/RouterView')
    },
    children: [{
        path: 'Buttons',
        name: 'Buttons',
        meta: {
          title: '',
          auth: false // 开发时用false
        },
        components: {
          submain: () => import('@/views/ButtonView')
        }
      },
      {
        path: 'Inputs',
        name: 'Inputs',
        meta: {
          title: '',
          auth: false // 开发时用false
        },
        components: {
          submain: () => import('@/views/InputView')
        }
      }]
  }]
})
