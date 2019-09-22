<template>
  <table :class="classname" v-if="columns.length && data.length">
    <thead>
      <tr>
        <td><input type="checkbox" title="Check all" @change="handleCheckAll"></td>
        <td :key="index" v-for="(html, index) in columns" v-html="html" />
      </tr>
    </thead>

    <tbody>
      <tr :key="index" v-for="(line, index) in data">
        <td><input type="checkbox" :value="index" v-model="checkboxs"></td>
        <td :key="indexValue" v-for="(value, indexValue) in line" v-html="value" />
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'Table Selection',
    data() {
      return {
        checkboxs: [],
        dataChecked: []
      }
    },
    props: {
      classname: {
        require: false,
        default: () => '',
        type: String
      },
      columns: {
        require: true,
        default: () => [],
        type: Array
      },
      data: {
        require: true,
        default: () => [],
        type: Array
      }
    },
    watch: {
      checkboxs(value = []) {
        this.dataChecked = this.data.filter((e, i) => value.includes(i))
      },
      dataChecked(value) {
        this.$emit('change', value)
      }
    },
    methods: {
      handleCheckAll({ target }) {
        this.checkboxs = target.checked ? this.data.map(e => e[0]) : []
      }
    }
  }
</script>
