<template>
  <div class="news news__list" v-if="!loading">
    <h1 class="news__title">{{ $store.state.news.description }}</h1>
    <input 
      v-model="search"
      class="news__search" 
      type="text" 
      placeholder="Поиск"
    >
    <template
      v-if="filtredNews.length"
    >
      <div
        v-for="(item, id) in filtredNews"
        :key="id"
        class="news__item"
      >
        <div 
          class="news__item__title"
          @click="$router.push({ name: 'readNews', params: { id }})"
        >
          {{ item.title }}
        </div>
        <div class="news__item__description" 
          v-html="item.description"
        />
      </div>
    </template>
    <div
      v-else
    >
      <h2>Нет новостей</h2>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NewsList',
    data () {
      return {
        search: ''
      }
    },
    computed: {
      ...mapGetters(['loading', 'getNewsBySearch']),
      filtredNews () {
        return this.getNewsBySearch(this.search)
      }
    }
  }
</script>

<style>

</style>
