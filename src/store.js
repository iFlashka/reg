import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import parser from 'fast-xml-parser'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    news: {}
  },
  mutations: {
    SET_NEWS (state, { rss }) {
      Vue.set(state, 'news', rss.channel)
    },
    SET_LOADING_STATUS (state, status) {
      state.loading = status
    }
  },
  actions: {
    fetchNews ({ commit }) {
      return axios.get('/company/news/rss').then(resp => {
        const parsedJSON = parser.parse(resp.data)
        commit('SET_LOADING_STATUS', false)
        commit('SET_NEWS', parsedJSON)
      })  
    }
  },
  getters: {
    getNewsBySearch: state => search => {
      return state.news.item.filter(news => {
        if (news.title.indexOf(search) !== -1) {
          return true
        } else if (news.description.indexOf(search) !== -1) {
          return true
        } else {
          return false
        }
      })
    },
    getNewsByIndex: state => index => {
      return state.news.item[index]
    },
    loading: state => state.loading
  }
})
