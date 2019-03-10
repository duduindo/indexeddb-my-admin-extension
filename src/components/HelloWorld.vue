<template>
  <div>
    <ul>
      <li :key="index" v-for="(tree, index) in trees">{{ tree.host }}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'HelloWorld',

  computed: {
    ...mapGetters({
      trees: 'getTrees'
    })
  }
}
</script>
