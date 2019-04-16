<template>
  <!-- Database -->
  <ul>
    <li :key="databaseIndex" v-for="(database, databaseIndex) in this.tree">
      <p>{{ database.name }}</p>

      <!-- Store -->
      <ul>
        <li :key="storeIndex" v-for="(store, storeIndex) in database.stores">
          <router-link :to="`/store/${database.name}/${database.version}/${store.name}/`">
            <p>{{ store.name }}</p>
          </router-link>

          <!-- Indexes -->
          <ul>
            <li :key="index" v-for="(indexed, index) in store.indexes">
              <router-link :to="`/store/${database.name}/${database.version}/${store.name}/${indexed}/`">
                <p>{{ indexed }}</p>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'MainTree',
    props: {
      tree: {
        type: Array,
        required: true,
        default() {
          return []
        }
      }
    }
  }
</script>
