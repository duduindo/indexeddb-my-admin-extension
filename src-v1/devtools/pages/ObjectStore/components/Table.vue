<template>
  <article>
    <form class="pure-form" name="object-stores-table">
      <fieldset class="pt-0 pb-0">
        <table v-if="columns.length && data.length" class="pure-table c-table c-table-theme-chrome">
          <thead>
            <tr>
              <td><input type="checkbox" title="Check all" @change="handleCheckAll"></td>
              <td :key="index" v-for="(html, index) in columns" v-html="html" />
            </tr>
          </thead>

          <tbody>
            <tr :key="index" v-for="(line, index) in data">
              <td><input type="checkbox" :value="index" v-model="checkboxs"></td>

              <td :key="indexValue" v-for="(value, indexValue) in line">
                <!-- <span v-if="indexValue < 2">{{value}}</span>
                <vue-json-pretty
                  v-else
                  :showDoubleQuotes="false"
                  :path="'res'"
                  :data="value">
                </vue-json-pretty> -->
                <span>{{value}}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
    </form>
  </article>
</template>

<script>
  // import VueJsonPretty from 'vue-json-pretty'

  export default {
    name: 'object-store-table',
    // components: { VueJsonPretty },
    data() {
      return {
        checkboxs: [],
        dataChecked: []
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
          [ 0, 'John', { title: 'Quarry Memories', author: 'Fred', isbn: 123456 } ],
          [ 1, 'Jane', { title: 'Quarry Memories', author: 'Fred', isbn: 123456 } ],
          [ 2, 'Susan', { title: 'Quarry Memories', author: 'Fred', isbn: 123456 } ],
          [ 3, 'Chris', { title: 'Quarry Memories', author: 'Fred', isbn: 123456 } ],
          [ 4, 'Dan', { title: 'Quarry Memories', author: 'Fred', isbn: 123456 } ]
        ],
        type: Array
      }
    }
  }
</script>
