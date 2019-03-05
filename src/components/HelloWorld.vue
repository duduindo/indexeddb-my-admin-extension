<template>
  <div id="app">
    <input type="text" v-model="domain" placeholder="Example: www.example.com">

    <ul>
      <li :key="index" v-for="(tree, index) in trees(domain)">{{ tree.domain }}</li>
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
