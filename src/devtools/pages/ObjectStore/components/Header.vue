<template>
  <header>
    <div class="pure-menu pure-menu-horizontal c-menu c-menu-primary">
      <ul class="pure-menu-list">
        <li :class="`pure-menu-item ${item.classname}`" :key="index" v-for="(item, index) in items">
          <router-link :to="`${item.href}`" class="pure-menu-link">
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'object-store-header',
    data() {
      return {
        items: [
          { name: 'Browser', href: '/object-store/library/1/books/', classname: 'pure-menu-selected' },
          { name: 'Search', href: '/', classname: '' },
          { name: 'Insert', href: '/object-store/library/1/books/insert/add/', classname: '' },
          { name: 'Export', href: '/', classname: '' },
          { name: 'Import', href: '/', classname: '' },
          { name: 'Operations', href: '/', classname: '' }
        ]
      }
    },
    watch: {
      '$route'() {
        this.handleItemSelected()
      }
    },
    mounted() {
      this.handleItemSelected()
    },
    methods: {
      handleItemSelected() {
        const name = this.$route.name
        let items = this.items

        items = items.map(item => {
          if (name === 'object-store-insert') {
            item.classname = ''
          }

          if (name === 'object-store-insert' && item.name === 'Insert') {
            item.classname = 'pure-menu-selected'
          }

          return item
        })

        this.items = items
      }
    }
  }
</script>

<style>

</style>
