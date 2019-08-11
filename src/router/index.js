import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// export default new Router({
//   // 去掉url中的#
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/login',
//       component: () => import('@/views/login/index'),
//       hidden: true
//     }
//   ]
// })

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
