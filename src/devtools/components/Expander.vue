<template>
  <div>
    <tree
      :data="treeDatabase"
      @node:selected="onNodeSelected"
    />

    <tree
      :data="treeSettings"
    />
  </div>
</template>

<script>
  import LiquorTree from 'liquor-tree'

  export default {
    name: 'Expander',
    data() {
      return {
        treeDatabase: [
          { text: 'New', data: { url: '/' } },
          {
            text: 'library',
            data: { url: '/database/library/1' },
            children: [
              { text: 'New' },
              {
                text: 'books',
                data: { url: '/database/library/1/books' },
                children: [
                  { text: 'New' },
                  { text: 'by_title', data: { url: '/database/library/1/books/by_title' } }
                ]
              }
            ]
          },
          { text: 'Item 3' },
          { text: 'Item 4' }
        ],

        treeSettings: [
          { text: 'Settings', state: { selectable: false } }
        ]
      }
    },
    [LiquorTree.name]: LiquorTree,
    methods: {
      onNodeSelected(node) {
        const { url = '/' } = node.data

        this.$router.push({ path: url })
      }
    }
  }
</script>
