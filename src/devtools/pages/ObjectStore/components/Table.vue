<template>
  <article>
    <form class="pure-form" name="object-stores-table">
      <fieldset class="pt-0 pb-0">
        <TableSelection @change="handleChange" classname="pure-table c-table c-table-theme-chrome" />
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
    },
    methods: {
      handleChange(value) {
        console.log('Table: ', value)
      }
    }
  }
</script>
