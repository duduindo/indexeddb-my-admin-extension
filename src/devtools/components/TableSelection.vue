<template>
  <table class="pure-table c-table c-table-theme-chrome">
    <thead>
      <tr>
        <td><input type="checkbox" title="Check all" @change="handleCheckAll"></td>
        <td :key="index" v-for="(html, index) in columns" v-html="html" />
      </tr>
    </thead>

    <tbody>
      <tr :key="index" v-for="(line, index) in data">
        <td><input type="checkbox" @change="$emit('change', line)" :value="index" v-model="checkboxs"></td>
        <td :key="indexValue" v-for="(value, indexValue) in line" v-html="value" />
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'table-selection',
    data() {
      return {
        checkboxs: [],
        dataChecked: []
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
    },
    watch: {
      checkboxs() {
        // to add data filtered to dataChecked
      }
    },
    methods: {
      handleCheckAll({ target }) {
        this.checkboxs = target.checked ? this.data.map(e => e[0]) : []
      }
    }
  }
</script>
