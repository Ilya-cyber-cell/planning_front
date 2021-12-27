import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Main.vue')
  },
  {
  path: '/Servers_del',
  name: 'Servers_del',
  component: () => import('../views/Servers.vue')
  },  
  {
    path: '/servers',
    name: 'servers',
    component: () => import('../views/Dict.vue'),
    props:  { uri: 'servers' }
  },  
  {
    path: '/data_center',
    name: 'data_center',
    component: () => import('../views/Dict.vue'),
    props:  { uri: 'data_center' },
  },
  {
    path: '/application',
    name: 'application',
    component: () => import('../views/Dict.vue'),
    props:  { uri: 'application' },
  },
  {
    path: '/client',
    name: 'client',
    component: () => import('../views/Dict.vue'),
    props:  { uri: 'client' },
  },  
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/Dict.vue'),
    props:  { uri: 'project' },
  },               
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Dict.vue'),
    props:  { uri: 'users' }
  },
  {
    path: '/group_users',
    name: 'group_users',
    component: () => import('../views/Dict.vue'),
    props:  { uri: 'group_users' }
  },    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
