import { createRouter, createWebHistory } from 'vue-router'
import homeView from '@/views/homeView.vue'
import JobsView from '@/views/JobsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import JobView from '../views/JobView.vue'
import AddJobView from '@/views/AddJobView.vue'
import EditJobView from '@/views/EditJobView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
     {
      path: '/jobs',
      name: 'Jobs',
      component: JobsView
    },
     {
      path: '/jobs/Add',
      name: 'Add-job',
      component: AddJobView,
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJobView,
    },
     {
      path: '/:catchAll(.*)',
      name: 'not-found ',
      component: NotFoundView
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView,
      
    }
  ]
})

export default router
