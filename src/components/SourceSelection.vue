<template>
  <div class='source-selection uk-margin-top'>
    <h2 class="uk-h2">Чё там у америкосов?</h2>
    <select class='uk-select' placeholder='Select' @change="sourceChanged">
      <option value="">Выбери проплаченых журналюг ...</option>
      <option
        v-for="source in sources"
        :label="source.name"
        :value="source.id" >
      </option>
    </select>
    <div class="uk-margin" v-if="source">
      <p class="uk-margin-bottom"> {{ source.description }} </p>
      <a class="uk-button uk-button-primary" :href="source.url">Перейти на сайт {{ source.name }} </a>
    </div>
  </div>
</template>

<script>
import apiKey from '../../config/api.key'

  export default {
    name: 'source-selection',
    data() {
      return {
        sources: [],
        source: null,
      }
    },
    created: function () {
      this.getSources();
    },
    methods:{
      getSources: function () {
        const self = this;
         this.axios.get('https://newsapi.org/v1/sources?language=en')
        .then(function (res){
          self.sources = res.data.sources;
        })
      },
      sourceChanged: function (e) {
        for (let i = 0; i < this.sources.length; i++){
          if (this.sources[i].id == e.target.value){
            this.source = this.sources[i];
          }
        }
        this.$emit('sourceChanged', e.target.value)
      }
    },
  }
</script>

<style>
.faded-enter-active, .faded-leave-active {
  transition: opacity 3s
}
.faded-enter, .faded-leave-to /* .fade-leave-active для <2.1.8 */ {
  opacity: 0
}
</style>
