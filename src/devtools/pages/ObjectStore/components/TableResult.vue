<template>
  <article>
    <form class="pure-form c-object-store-result" name="object-stores-list">
      <fieldset>
        <TableSelection />
      </fieldset>
    </form>
  </article>
</template>

<script>
  import TableSelection from '@/devtools/components/TableSelection'

  export default {
    name: 'object-store-result',
    components: { TableSelection },
    data() {
      return {
        tableHead: [],
        tableBody: []
      }
    }
  }
</script>
