import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentView from "@/views/students/StudentView.vue";
import StudentCreateView from "@/views/students/StudentCreateView.vue";
import StudentEditView from "@/views/students/StudentEditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/students',
      name: 'students',
      component: StudentView
    },
    {
      path: '/students/create',
      name: 'studentCreate',
      component: StudentCreateView
    },
    {
      path: '/students/:id/edit',
      name: 'studentEdit',
      component: StudentEditView
    },
  ]
})

export default router
