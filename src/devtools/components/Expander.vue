<template>
  <div>
    <tree
      :data="treeData"
    />
  </div>
</template>

<script>
  import LiquorTree from 'liquor-tree'

  export default {
    name: 'Expander',
    data() {
      return {
        treeData: [
          { text: 'Item 1' },
          {
            text: 'Item 2',
            children: [
              { text: 'Item 2.1' },
              {
                text: 'Item 2.2',
                children: [
                  { text: 'Item 2.2.1' },
                  { text: 'Item 2.2.2' }
                ]
              }
            ]
          },
          { text: 'Item 3', state: { selected: true } },
          { text: 'Item 4' }
        ]
      }
    },
    [LiquorTree.name]: LiquorTree
  }
</script>
