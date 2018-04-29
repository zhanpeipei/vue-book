import Vue from 'vue'
import Router from 'vue-router'

import BookShelf from 'components/book-shelf'
import BookFree from 'components/book-free'
import BookShop from 'components/book-shop'
import BookSort from 'components/book-sort'
import BookReader from 'components/book-reader'

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path:'/',
      redirect:'/bookshelf'
    },
    {
      path: '/bookshelf',
      component: BookShelf
    },
    {
      path:"/booksort/:id",
      component:BookSort
    },
    {
      path:'/bookshop',
      component:BookShop,
    },
    {
      path:'/bookfree',
      component:BookFree
    },
    {
      path:'/bookreader/:id',
      component:BookReader
    },
  ]
})
