<template>
  <section>
    <Actions />
    <TableResult />
  </section>
</template>

<script>
  import Actions from '../components/Actions'
  import TableResult from '../components/TableResult'

  export default {
    name: 'object-store-content',
    components: { Actions, TableResult }
  }
</script>
