import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    components:{
      main: () => import('@/components/RouterView')
    },
    children: [{
        path: 'toggle',
        name: 'toggle',
        meta: {
          title: '',
          auth: false // 开发时用false
        },
        components: {
          submain: () => import('@/components/lightyUI/Toggle')
        }
      },
      {
        path: 'bubble',
        name: 'bubble',
        meta: {
          title: '',
          auth: false // 开发时用false
        },
        components: {
          submain: () => import('@/components/lightyUI/Bubble')
        }
      }]
  }]
})
