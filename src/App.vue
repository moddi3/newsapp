<template>
  <div class="uk-section uk-section-default" id='app'>
    <gh-corner></gh-corner>
    <div class="uk-container uk-container-small uk-position-relative">
      <source-selection @sourceChanged="sourceChanged"></source-selection>
      <news-list :source="source"></news-list>
    </div>
  </div>
</template>

<script>
  import SourceSelection from './components/SourceSelection'
  import NewsList from './components/NewsList'
  import GhCorner from './components/GithubCorner'

  export default {
    name: 'app',
    components: {
      SourceSelection,
      NewsList,
      GhCorner
    },
    data() {
      return {
        source: ''
      }
    },
    methods:{
      sourceChanged: function (source) {
        this.source  = source;
      }
    },
  }
</script>

<style>
* {
  /*font-family: 'Hack', 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
