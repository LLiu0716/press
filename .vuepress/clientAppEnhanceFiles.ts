import { defineClientAppEnhance } from '@vuepress/client'
// import OtherComponent from './components/OtherComponent.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // app.component('MyComponent', OtherComponent)
  router.beforeEach((to, form, next) => {
    // siteData.value = {
    //   base: '/',
    //   lang: 'zh-CN',
    //   locales: {},
    //   title: '123',
    //   description: '588974416541561312',
    //   head: []
    // }
    next()
  })

  router.afterEach((to) => {
    console.log('after navigation')
  })
})
