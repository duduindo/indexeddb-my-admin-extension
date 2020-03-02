<template>
  <div>
    <v-select
      :items="items"
      label="Select storage or database"
      solo
    />

    <v-list>
      <v-list-group
        prepend-icon="mdi-database"
        value="true"
      >



      </v-list-group>
    </v-list>
  </div>
</template>


<script lang="ts">
  export default {
    data: () => ({
      admins: [
        ['Management'],
        ['Settings'],
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],

      items: [
        {text: 'IndexedDB', value: 'indexeddb'},
        {text: 'Local Storage', value: 'local-storage'},
        {text: 'Session Storage', value: 'session-storage'},
      ],

      // Structures
      structures: [
        {
          name: "biblioteca2",
          version: 158272957993319,
          tables: [
            {
              name: "corredores",
              indexes: [
                {
                  name: "by_corredor"
                }
              ]
            }
          ]
        },

        {
          name: "banco1",
          version: 1,
          tables: [
            {
              name: "filials",
              indexes: []
            },
            {
              name: "caixas",
              indexes: [
                {
                  name: "by_caixa"
                },
                {
                  name: "by_funcionario"
                }
              ]
            }
          ]
        },

      ],

    }),
  }
</script>
