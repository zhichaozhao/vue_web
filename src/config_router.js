export function configRouter (router) {
  router.map({
    '/': {
      name: 'home',
      title: '首页',
      component: (resolve) => require(['./components/home/Home.vue'], resolve)
    },
    '/event': {
      name: 'event',
      title: '首页',
      component: (resolve) => require(['./components/event/Event.vue'], resolve)
    },
  })

  // router.redirect({
  //   '/': '/index/1',
  //   '/message': '/message/1',
  //   '/good': '/good/1',
  //   '/share': '/share/1',
  //   '/ask': '/ask/1',
  //   '/job': '/job/1'
  // })

}
