<template>
  <table class="table table-pmahomme">
    <thead>
      <tr>
        <th colspan="4"><a href="#">Actions</a></th>
        <th><a href="#">#</a></th>
        <th><a href="#">Key (key path: "{{ keyPath }}")</a></th>
        <th><a href="#">Value</a></th>
      </tr>
    </thead>

    <tbody>
      <tr :key="index" v-for="(cursor, index) in values">
        <td><input type="checkbox"></td>
        <td>
          <router-link :to="{ path: `/object-store/${database}/${version}/${store}/insert`, query: { cursor } }">
            <img src="images/b_edit.png" alt="Edit object store">
            <span>Edit</span>
          </router-link>
        </td>
        <td>
          <router-link :to="{ path: `/object-store/${database}/${version}/${store}/insert`, query: { cursor } }">
            <img src="images/b_insrow.png" alt="Copy object store">
            <span>Copy</span>
          </router-link>
        </td>
        <td>
          <a href="#delete">
            <img src="images/b_drop.png" alt="Delete object store">
            <span>Delete</span>
          </a>
        </td>
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
