// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

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
      component: (resolve) => require(['./components/home/Home'], resolve)
    },
    {
      path: '/event',
      component: (resolve) => require(['./components/event/Event'], resolve)
    },
    {
      path: '/spacelist',
      component: (resolve) => require(['./components/event/SpaceList.vue'], resolve)
    },
    {
      path: '/booking',
      component: (resolve) => require(['./components/booking/app.vue'], resolve)
    },
    {
      path: '/personal',
      component: (resolve) => require(['./components/personal/app.vue'], resolve)
    },
    {
      path: '/space/dtl',
      component: (resolve) => require(['./components/space/dtl.vue'], resolve)
    },
    {
      path: '/place/dtl',
        component: (resolve) => require(['./components/place/app.vue'], resolve)
    },
    {
      path: '/event/form',
        component: (resolve) => require(['./components/event/Form'], resolve)
    },
    {
      path: '/personal/form',
        component: (resolve) => require(['./components/personal/Form'], resolve)
    },

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
