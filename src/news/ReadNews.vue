<template>
  <div 
    v-if="!loading"
    class="news news-item">
    <div
      class="news__item"
    >
      <div 
        class="news__item__title"
      >
        {{ news.title }}
      </div>
      <div class="news__item__description" 
        v-html="news.description"
      />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'ReadNews',
    computed: {
      ...mapGetters(['loading', 'getNewsByIndex']),
      news () {
        return this.getNewsByIndex(this.$route.params.id)
      }
    }
  }
</script>

<style>

</style>
