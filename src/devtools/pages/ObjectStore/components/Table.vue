<template>
  <article>
    <form class="pure-form" name="object-stores-table">
      <fieldset class="pt-0 pb-0">
        <TableSelection
          @change="handleChange"
          :columns="columns"
          :data="data"
          classname="pure-table c-table c-table-theme-chrome"
        />
      </fieldset>
    </form>
  </article>
</template>

<script>
  import TableSelection from '@/devtools/components/TableSelection'

  export default {
    name: 'object-store-table',
    components: { TableSelection },
    methods: {
      handleChange(value) {
        this.$emit('change', value)
      }
    },
    props: {
      columns: {
        require: true,
        default: () => ['#', 'Key (Key path: "<span>isbn</span>")', 'Value'],
        type: Array
      },
      data: {
        require: true,
        default: () => [
          [ 0, 'John', '{title: "Quarry Memories", author: "Fred", isbn: 123456}' ],
          [ 1, 'Jane', '{title: "Quarry Memories", author: "Fred", isbn: 123456}' ],
          [ 2, 'Susan', '{title: "Quarry Memories", author: "Fred", isbn: 123456}' ],
          [ 3, 'Chris', '{title: "Quarry Memories", author: "Fred", isbn: 123456}' ],
          [ 4, 'Dan', '{title: "Quarry Memories", author: "Fred", isbn: 123456}' ]
        ],
        type: Array
      }
    }
  }
</script>
