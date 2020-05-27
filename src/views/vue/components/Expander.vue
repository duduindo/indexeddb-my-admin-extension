<template>
  <el-menu :default-openeds="['0']">

    <!-- Storage -->
    <el-submenu
      v-for="(storage, indexStorage) in storages"
      :key="indexStorage"
      :index="formatIndex(indexStorage)"
      >
      <template slot="title">{{ storage.name }}</template>

      <el-menu-item-group>
        <!-- Database -->
        <el-submenu
          v-for="(database, indexDatabase) in storage.databases"
          :key="indexDatabase"
          :index="formatIndex(indexStorage, indexDatabase)"
          >
          <template slot="title">
            <div @click="selectDatabase(storage.id, database.name, database.version)">
              <i class="el-icon-coin"></i> {{ database.name }}
            </div>
          </template>

          <!-- Table -->
          <el-submenu
            v-for="(table, indexTable) in database.tables"
            :key="indexTable"
            :index="formatIndex(indexStorage, indexDatabase, indexTable)"
            >
            <template slot="title">
              <div @click="selectTable(storage.id, database.name, database.version, table.name)">
                <i class="el-icon-coin"></i>
                {{ table.name }}
              </div>
            </template>

            <!-- Index -->
            <el-menu-item-group>
              <el-menu-item
                v-for="(index, i) in table.indexes"
                :key="i"
                :index="formatIndex(indexStorage, indexDatabase, indexTable, i)"
              >
                <div @click="selectIndex(storage.id, database.name, database.version, table.name, index.name)">
                  <i class="el-icon-notebook-2"></i>
                  {{ index.name }}
                </div>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-submenu>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
</template>


<script>
  export default {
    methods: {
      formatIndex: (...indexes) => indexes.join('-'),
      selectDatabase(id, name, version) {
        console.log(id, name, version)
      },
      selectTable(id, name, version, tablename) {
        console.log(id, name, version, tablename)
      },
      selectIndex(id, name, version, tablename, indexname) {
        console.log(id, name, version, tablename, indexname)
      },
    },
    computed: {
      storages() {
        return this.$store.getters.getExpanderStorages
      }
    },
  }
</script>
