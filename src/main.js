import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueParticles from 'vue-particles'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import HighchartsVue from 'highcharts-vue'

Vue.use(VueParticles)

Vue.use(VueRouter)
Vue.use(HighchartsVue)

Vue.use(ElementUI)

Vue.config.productionTip = false

NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})
//当路由进入前
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
//当路由进入后：关闭进度条
router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
