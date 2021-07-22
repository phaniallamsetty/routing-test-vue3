import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { message: 'Hello' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    beforeEnter: (to, from) => {
      if(from && from.fullPath && from.fullPath === '/') {
        alert('Illegal Navigation');

        if(from.meta && from.meta.message) {
          alert(from.meta.message);
        }
        return false;
      }
    }
  },
  {
    path: '/user/:id', component: () => import('../views/User.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '/nested',
    component: () => import('../views/Nested.vue'),
    children: [
      { path: '', component: () => import('../views/NestedHome.vue') },
      { path: 'one', component: () => import('../views/NestedOne.vue') },
      { path: 'two', component: () => import('../views/NestedTwo.vue') }
    ]
  },
  {
    path: '/programmatic',
    component: () => import('../views/Programmatic.vue'),
    children: [
      { path: 'one', component: () => import('../views/ProgrammaticOne.vue') },
      { path: 'two', component: () => import('../views/ProgrammaticTwo.vue') },
      { path: 'three', component: () => import('../views/ProgrammaticThree.vue') },
      { path: 'four', component: () => import('../views/ProgrammaticFour.vue') }
    ]
  }, 
  {
    path: '/dataFetching',
    name: 'DataFetching',
    component: () => import('../views/DataFetching.vue'),
    children: [
      { path: 'before', component: () => import('../views/DataFetchingBefore.vue') },
      { path: 'after', component: () => import('../views/DataFetchingAfter.vue') }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

/*router.beforeEach((to, from) => {
  if(from.fullPath && from.fullPath === '/' && to.fullPath && to.fullPath === '/about') {
    alert('Illegal Navigation');
    return false;
  }

  return true;
});*/

export default router
