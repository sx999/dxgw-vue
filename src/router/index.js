import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index/index.vue'
// import Home from '../views/Page/Home.vue'
// import Industry from '../views/Page/Industry.vue'
// import Solution from '../views/Page/Solution.vue'
// import Agency from '../views/Page/Agency.vue'
// import Contact from '../views/Page/Contact.vue'
// import Album from '../views/Page/Album.vue'
// import About from '../views/Page/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Index',
    component: Index,
    children: [
      {path:"",redirect:"/home"},
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Page/Home.vue')
      },
      {
        path: '/industry',
        // name: 'Industry',
        component: () => import('../views/Page/Industry.vue'),
        children:[
              {path:"",redirect:"/industry/industryclass"},
              {
                 path:"/industry/industrydetail",
                 name: 'IndustryDetail',
                 component: () => import('../views/Page/IndustryDetail.vue'),
              },
              {
                path:"/industry/industryclass",
                name: 'IndustryClass',
                component: () => import('../views/Page/IndustryClass.vue'),
             },
        ]
      },
      // {
      //   path: '/solution',
      //   name: 'Solution',
      //   component: () => import('../views/Page/Solution.vue'),
      //   children:[
      //      {path:"/solution/secondary",
      //       name: 'Secondary',
      //      component: () => import('../views/Page/Secondary.vue'),},
      //   ]
      // },
      {
        path: '/solution',
        name: 'Solution',
        component: () => import('../views/Page/Solution.vue'),
      },
      {
        path: '/secondary',
        name: 'Secondary',
        component: () => import('../views/Page/Secondary.vue'),
      },
      {
        path: '/agency',
        name: 'Agency',
        component: () => import('../views/Page/Agency.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Page/Contact.vue')
      },
      {
        path: '/album',
        name: 'Album',
        component: () => import('../views/Page/Album.vue')
        
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/Page/About.vue')
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
