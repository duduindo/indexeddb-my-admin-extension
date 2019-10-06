<template>
  <nav :hidden="!tabs.length">
    <ul class="nav nav-tabs">
      <li :key="index" v-for="(tab, index) in tabs" class="nav-item">
        <router-link
          :to="tab.href"
          class="nav-link"
          :class="{ 'active': tab.isActive }"
        >
          {{ tab.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'NavigatorBar',
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        tabs: 'getNavigatorBarTabs'
      })
    },
    methods: {
      ...mapActions({})
    },
    watch: {
      '$route'(to) {

      }
    }
  }
</script>
