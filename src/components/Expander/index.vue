<template>
  <ul>
    <li :key="index" v-for="(database, index) in databases">
      <router-link :to="`/database/${database.name}/${database.version}/`">
        {{ database.name }}
      </router-link>

      <ul>
        <li :key="index" v-for="(store, index) in database.stores">
          <router-link :to="`/store/${database.name}/${database.version}/${store.name}/`">
            {{ store.name }}
          </router-link>

          <ul>
            <li :key="index" v-for="(indexed, index) in store.indexes">
              <router-link :to="`/index/${database.name}/${database.version}/${store.name}/${indexed.name}/`">
                {{ indexed.name }}
              </router-link>

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
