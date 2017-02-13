<template>
  <div class="uk-container uk-container-expand" id='app'>
    <source-selection @sourceChanged="sourceChanged"></source-selection>
    <news-list :source="source"></news-list>
  </div>
</template>

<script>
  import SourceSelection from './components/SourceSelection'
  import NewsList from './components/NewsList'

  export default {
    name: 'app',
    components: {
      SourceSelection,
      NewsList
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
