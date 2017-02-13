<template>
  <div class='news-list'>
    <div class="uk-card uk-card-secondary uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid v-for='article in articles'>
      <a :href='article.url' target='_blank' class="uk-cover-container">
        <div class="uk-card-media-left">
          <img :src="article.urlToImage" :alt="article.title" :title="article.title" uk-cover>
        </div>
      </a>
      <div>
        <div class="uk-card-body">
          <h3 class="uk-card-title">
            <a :href='article.url' target='_blank'> {{ article.title }} </a>
          </h3>
          <p> {{article.description}} </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  const apiKey = 'f5ae03e47a474e1dbcb11e5762e0eefe';

  export default {
    name: 'news-list',
    props: ['source'],
    data() {
      return {
        articles: []
      }
    },
    methods: {
      updateSource: function (source) {
        let self = this;
        this.axios.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey)
          .then(function (res) {
            self.articles = res.data.articles;
          })
      }
    },
    activated: function () {
      this.updateSource(this.source);
    },
    watch: {
      source: function (val) {
        this.updateSource(val);
      }
    }
  }
</script>

<style>

</style>
