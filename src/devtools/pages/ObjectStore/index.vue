<template>
  <div>
    <h1>Object Store Page</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'store',
    data() {
      return {
        tabs: [
          { name: 'Browser', href: '.', isActive: true },
          { name: 'Structure', href: '/' }
        ]
      }
    },
    methods: {
      ...mapActions({
        setTabs: 'setNavigatorBarTabs',
        setTabActive: 'setNavigatorBarActive'
      }),
      handleTabs() {
        this.setTabs(this.tabs)
      }
    },
    mounted() {
      this.handleTabs()
    },
    destroyed() {
      this.setTabs()
    }
  }
</script>
