<template>
  <article>
    <form class="pure-form" name="object-stores-table">
      <fieldset class="pt-0 pb-0">
        <TableSelection />
      </fieldset>
    </form>
  </article>
</template>

<script>
  import TableSelection from '@/devtools/components/TableSelection'

  export default {
    name: 'object-store-table',
    components: { TableSelection },
    data() {
      return {
        tableHead: [],
        tableBody: []
      }
    }
  }
</script>
