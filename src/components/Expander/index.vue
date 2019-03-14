<template>
  <ul>
    <li :key="index" v-for="(database, index) in databases">
      name: {{ database.name }} | version: {{ database.version }}

      <ul>
        <li :key="index" v-for="(store, index) in database.stores">
          {{ store.name }}

          <ul>
            <li :key="index" v-for="(indexed, index) in store.indexes">
              {{ indexed.name }}
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Expander',
  computed: {
    ...mapGetters({
      databases: 'getDatabases'
    })
  }
}
</script>
