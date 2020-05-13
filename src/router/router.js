import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    component: () => import('../components/chooseOne'),
    name: 'chooseOne'
  },
  {
    path: '/wy',
    component: () => import('../views/layout'),
    name: 'wy',
    children: [
      {
        path: '/wy',
        component: () => import('../views/wy')
      }
    ]
  },
  {
    path: '/gsc',
    component: () => import('../views/gsc'),
    name: 'gsc'
  }
  //   {
  //     path: '/AppDelivery',
  //     component: () => import('../views/layout/Layout'),
  //     redirect: '/AppDelivery/guideChannel',
  //     name: 'AppDelivery',
  //     meta: { title: '应用投放', icon: '' },
  //     alwaysShow: true,
  //     children: [
  //       {
  //         path: 'guideChannel',
  //         component: () => import('../views/AppDelivery/guideChannel'),
  //         name: 'guideChannel',
  //         meta: { title: '导视频道' }
  //       }
  //     ]
  //   }
  //   {
  //     path: '/systemSettings',
  //     component: () => import('../views/layout/Layout'),
  //     redirect: '/systemSettings',
  //     name: 'systemSettings',
  //     meta: { title: '系统设置', icon: '' },
  //     // alwaysShow: true,
  //     children: [
  //       {
  //         path: 'systemSettings',
  //         component: () => import('../views/systemSettings'),
  //         name: 'systemSettings',
  //         meta: { title: '系统设置' }
  //       }
  //     ]
  //   }
]
export default new Router({
  routes: constantRouterMap
})
