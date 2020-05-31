<template>
  <div>
    <el-tree :data="storagesToTree(storages)" :props="[]" @node-click="handleNodeClick"></el-tree>
  </div>
</template>


<script>
  export default {
    methods: {
      handleNodeClick({ data }) {
        switch (data.type) {
          case 'storage':
            console.log(data)
            break;

          case 'database':
            console.log(data)
            break;

          case 'table':
            this.$router.push({ path: `/table/${data.storage}/${data.databasename}/${data.version}/${data.tablename}/content/` }, () => {})
            break;

          case 'index':
            console.log(data)
            break;
        }
      },
      storagesToTree(storages = []) {
        return storages.map(storage => ({
          label: storage.name,
          data: {
            type: 'storage',
            storage: storage.id,
          },
          // Databases
          children: storage.databases.map(database => ({
            label: database.name,
            data: {
              type: 'database',
              storage: storage.id,
              databasename: database.name,
              version: database.version,
            },

            // Tables
            children: database.tables.map(table => ({
              label: table.name,
              data: {
                type: 'table',
                storage: storage.id,
                databasename: database.name,
                version: database.version,
                tablename: table.name,
              },

              // Indexes
              children: table.indexes.map(index => ({
                label: index.name,
                data: {
                  type: 'index',
                  storage: storage.id,
                  databasename: database.name,
                  version: database.version,
                  tablename: table.name,
                  indexname: index.name,
                },
              })),
            })),
          })),
        }));
      }
    },
    computed: {
      storages() {
        return this.$store.getters.getExpanderStorages;
      }
    },
  };
</script>
