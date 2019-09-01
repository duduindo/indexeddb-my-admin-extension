<template>
  <header>
    <div class="pure-menu pure-menu-horizontal c-menu c-menu-primary">
      <ul class="pure-menu-list">
        <li :class="`pure-menu-item ${item.classname}`" :key="index" v-for="(item, index) in items">
          <a href="#" class="pure-menu-link">{{ item.name }}</a>
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
          { name: 'Browser', classname: 'pure-menu-selected' },
          { name: 'Search', classname: '' },
          { name: 'Insert', classname: '' },
          { name: 'Export', classname: '' },
          { name: 'Import', classname: '' },
          { name: 'Operations', classname: '' }
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
