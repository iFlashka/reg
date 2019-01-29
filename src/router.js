import Vue from 'vue'
import Router from 'vue-router'

import Base from './App.vue'

import NewsList from './news/NewsList.vue'
import NewsItem from './news/ReadNews.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Base,
      children: [
        {
          path: '',
          name: 'news',
          component: NewsList
        },
        {
          path: ':id',
          name: 'readNews',
          component: NewsItem
        }
      ]
    }
  ]
})
