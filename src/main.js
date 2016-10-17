// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { configRouter } from './config_router'
import Home from './components/home/Home'
import Event from './components/event/Event'
import SpaceList from './components/event/SpaceList.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  history: true,
  saveScrollPosition: true,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/event',
      component: Event
    },
    {
      path: '/spacelist',
      component: SpaceList
    }
  ]
})
const app = new Vue({

    render: h => h(App),
    router:router

}).$mount('#app')

// new Vue({
//     el: '#app',
//     render: h => h(App)
// })


// 现在，应用已经启动了！
