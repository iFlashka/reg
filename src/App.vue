<template>
  <div class="app-layout">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Layout',
  created () {
    this.fetchNews()
  },
  methods: {
    ...mapActions(['fetchNews'])
  }
}
</script>

<style>
  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  .app-layout {
    max-width: 1080px;
    margin: 0 auto;
    font-family: sans-serif
  }
  
  .news__item__title {
    cursor: pointer;
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 10px;
  }

  .b-news-article__right {
    float: right;
    display: block;
  }

  .news__item {
    margin: 10px 0;
    clear: both;
  }

  .news__item__description img {
    max-width: 100%;
    display: block;
  }

  .news__search {
    width: 100%;
    border: 1px solid #333;
    padding: 10px 5px;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    .b-news-article__right {
      float: initial;
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    .news__item__description img {
      display: none;
    }
  }
</style>