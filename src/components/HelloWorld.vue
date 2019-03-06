<template>
  <div id="app">
    <ul>
      <li :key="index" v-for="(tree, index) in trees">{{ tree.host }}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'HelloWorld',

  data() {
    return {
      domain: 'www.example.com'
    }
  },

  computed: {
    ...mapGetters({
      trees: 'getTrees'
    })
  }
}
</script>
