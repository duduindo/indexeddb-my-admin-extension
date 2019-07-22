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
    methods: {
      ...mapActions({
        setTabs: 'setNavigatorBarTabs',
        setTabActive: 'setNavigatorBarActive'
      })
    },
    mounted() {
      const tabs = [
        {
          name: 'Browser',
          href: '/',
          isActive: true
        },
        {
          name: 'Structure',
          href: '/'
        }
      ]

      this.setTabs(tabs)
    },
    destroyed() {
      this.setTabs()
    }
  }
</script>
