<template>
  <section>
    <Actions />
    <Table />
  </section>
</template>

<script>
  import Actions from '../components/Actions'
  import Table from '../components/Table'

  export default {
    name: 'object-store-content',
    components: { Actions, Table }
  }
</script>
