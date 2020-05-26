<template>
  <el-menu :default-openeds="['1']">

    <!-- Storage -->
    <el-submenu
      v-for="(storage, indexStorage) in storages"
      :key="indexStorage"
      :index="String(indexStorage)"
      >
      <template slot="title">{{ storage.name }}</template>

      <el-menu-item-group>
        <!-- Database -->
        <el-submenu
          v-for="(database, indexDatabase) in storage.databases"
          :key="indexDatabase"
          :index="String(indexStorage) + '-' + String(indexDatabase)"
          >
          <template slot="title"><div><i class="el-icon-coin"></i> {{ database.name }}</div></template>

          <!-- Table -->
          <el-submenu
            v-for="(table, indexTable) in database.tables"
            :key="indexTable"
            :index="String(indexStorage) + '-' + String(indexDatabase) + '-' + String(indexTable)"
            >
            <template slot="title"><div><i class="el-icon-coin"></i> {{ table.name }}</div></template>

            <!-- Index -->
            <el-menu-item-group>
              <el-menu-item
                v-for="(index, i) in table.indexes"
                :key="i"
                :index="String(indexStorage) + '-' + String(indexDatabase) + '-' + String(indexTable)+ '-' + String(i)"
              >
                <div><i class="el-icon-notebook-2"></i> {{ index.name }}</div>
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
    computed: {
      storages() {
        return this.$store.getters.getExpanderStorages
      }
    },
  }
</script>
