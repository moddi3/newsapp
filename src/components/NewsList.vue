<template>
  <div class='news-list'>
    <div>
      <div class="spinner" uk-spinner v-if='!isLoaded'></div>
    </div>
    <transition-group name="fade">
      <article class="uk-article" v-for='article in articles' :key="source" >

        <h1 class="uk-article-title">
          <a class="uk-link-reset" :href='article.url' target='_blank'>{{ article.title }}</a>
        </h1>

        <p v-if="article.author !== null" class="uk-article-meta">Written by <a class="uk-text-bold" href="#">{{ article.author }}</a></p>

        <p>{{article.description}}</p>
        <!--<a :href='article.url' target='_blank' class='uk-cover-container'>
          <p>
            <img :src='article.urlToImage' :alt='article.title' :title='article.title' uk-cover>
          </p>
        </a>-->
        <div class="uk-grid-small uk-child-width-auto" uk-grid>
          <div>
            <a class="uk-button uk-button-text" :href='article.url' target='_blank'>Read more</a>
          </div>
        </div>

      </article>
    </transition-group>
  </div>
</template>

<script>
  const apiKey = 'f5ae03e47a474e1dbcb11e5762e0eefe';

  export default {
    name: 'news-list',
    props: ['source'],
    data() {
      return {
        articles: [],
        isLoaded: new Boolean
      }
    },
    methods: {
      updateSource: function (source) {
        let self = this;
        this.articles = [];
        this.isLoaded = false;
        setTimeout(function () {
          self.axios.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey)
            .then(function (res) {
              console.log(res);
              self.articles = res.data.articles;
              self.isLoaded = true;
            })
        }, 750);

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
 /*{
   transition: all 2s
 }*/
.fade-enter-active{
  transition: opacity 1s;
}
.fade-leave-active{
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
  opacity: 0;
}

.spinner{
  position: absolute;
}
</style>
