import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/reg',
    component: () => import('@/views/reg/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/student',
    component: Layout,
    redirect: '/student/table',
    name: 'Student',
    meta: { title: 'StudentMGT', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'ListStudent',
        component: () => import('@/views/student/table/index'),
        meta: { title: 'ListStu', icon: 'table' }
      },
      {
        path: 'index',
        name: 'AddStudent',
        component: () => import('@/views/student/form/index'),
        meta: { title: 'AddStu', icon: 'form' }
      },
      {
        path: 'edit',
        name: 'EditStudent',
        component: () => import('@/views/student/edit/index')
      }
    ]
  },
  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/table',
    name: 'Teacher',
    meta: { title: 'TeacherMGT', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'ListTeacher',
        component: () => import('@/views/teacher/table/index'),
        meta: { title: 'ListTeacher', icon: 'table' }
      },
      {
        path: 'index',
        name: 'AddTeacher',
        component: () => import('@/views/teacher/form/index'),
        meta: { title: 'AddTeacher', icon: 'form' }
      },
      {
        path: 'edit',
        name: 'EditTeacher',
        component: () => import('@/views/teacher/edit/index')
      }
    ]
  },
  {
    path: '/course',
    component: Layout,
    redirect: '/course/table',
    name: 'Course',
    meta: { title: 'CourseMGT', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'ListCourse',
        component: () => import('@/views/course/table/index'),
        meta: { title: 'ListCourse', icon: 'table' }
      },
      {
        path: 'index',
        name: 'AddCourse',
        component: () => import('@/views/course/form/index'),
        meta: { title: 'AddCourse', icon: 'form' }
      },
      {
        path: 'edit',
        name: 'EditCourse',
        component: () => import('@/views/course/edit/index')
      }
    ]
  },
  {
    path: '/score',
    component: Layout,
    redirect: '/score/table',
    name: 'Score',
    meta: { title: 'ScoreMGT', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'ListScore',
        component: () => import('@/views/score/table/index'),
        meta: { title: 'ListScore', icon: 'table' }
      },
      {
        path: 'index',
        name: 'AddScore',
        component: () => import('@/views/score/form/index'),
        meta: { title: 'AddScore', icon: 'form' }
      },
      {
        path: 'edit',
        name: 'EditScore',
        component: () => import('@/views/score/edit/index')
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/table',
    name: 'User',
    meta: { title: 'UserMGT', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'ListUsers',
        component: () => import('@/views/user/table/index'),
        meta: { title: 'ListUserMGT', icon: 'table' }
      }
    ]
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
