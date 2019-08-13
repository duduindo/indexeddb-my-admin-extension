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
          { text: 'library', data: { url: '/database/library/1' } },
          {
            text: 'Item 2',
            children: [
              { text: 'New' },
              { text: 'Item 2.1' },
              {
                text: 'Item 2.2',
                children: [
                  { text: 'New' },
                  { text: 'Item 2.2.1' },
                  { text: 'Item 2.2.2' }
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
