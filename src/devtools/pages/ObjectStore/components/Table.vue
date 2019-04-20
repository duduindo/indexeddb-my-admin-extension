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
          <router-link :to="{ path: `/object-store/${database}/${version}/${store}/add`, query: { cursor } }">Edit</router-link>
        </td>
        <td>
          <router-link :to="{ path: `/object-store/${database}/${version}/${store}/edit`, query: { cursor } }">Copy</router-link>
        </td>
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
    name: 'Table',
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
      content: {
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
      content(value) {
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
