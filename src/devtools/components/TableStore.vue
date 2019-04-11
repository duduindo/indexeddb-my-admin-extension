<template>
  <table>
    <thead>
      <tr>
        <th colspan="4">Actions</th>
        <th>#</th>
        <th>Key (key path: "{{ keyPath }}")</th>
        <th>Value</th>
      </tr>
    </thead>

    <tbody>
      <tr :key="index" v-for="(cursor, index) in values">
        <td><input type="checkbox"></td>
        <td>
          <router-link :to="`/edit/store/${database}/${version}/${store}/`" :query="cursor">Edit</router-link>
        </td>
        <td><a href="#copy">Copy</a></td>
        <td><a href="#delete">Delete</a></td>
        <td>{{ index }}</td>
        <td>{{ keys[index] }}</td>
        <td>
          <vue-json-pretty :data="cursor"></vue-json-pretty>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'TableStore',
    data() {
      return {
        keyPath: null,
        keys: [],
        values: []
      }
    },
    props: {
      database: {
        type: String,
        required: true
      },
      version: {
        type: [String, Number],
        required: true
      },
      store: {
        type: String,
        required: true
      },
      objectStore: {
        type: Object,
        required: true,
        default() {
          return {
            keyPath: null,
            keys: [],
            values: []
          }
        }
      }
    },
    watch: {
      objectStore(value) {
        if (value.keyPath) {
          this.keyPath = value.keyPath
        }

        if (value.keys) {
          this.keys = value.keys
        }

        if (value.values) {
          this.values = value.values
        }
      }
    }
  }
</script>
