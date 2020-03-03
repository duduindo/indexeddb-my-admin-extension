<template>
  <v-navigation-drawer permanent :dark="true">
    <v-list-item>
      <v-list-item-content>
        <v-select
          :items="items"
          v-model="storageSelected"
          label="Select storage or database"
          outlined
        />
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      nav
    >
      <!-- <v-list-item
        v-for="structure in structures"
        :key="structure.title"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-database</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ structure.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->

      <v-list-group
        prepend-icon="mdi-database"
        value="true"
        v-model="test"
      >

        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-item
          v-for="structure in structures"
          :key="structure.title"
          link
        >
          <v-list-item-icon>
            <v-icon>mdi-database</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ structure.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Sub 1 -->
          <v-list-group
            prepend-icon="mdi-database"
            value="true"
            sub-group
          >

            <template v-slot:activator>
              <v-list-item-title>Users</v-list-item-title>
            </template>

            <v-list-item
              v-for="structure in structures"
              :key="structure.title"
              link
            >
              <v-list-item-icon>
                <v-icon>mdi-database</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ structure.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>
        <!-- /Sub 1 -->


      </v-list-group>



    </v-list>
  </v-navigation-drawer>
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

      test: false,

      storageSelected: {text: 'IndexedDB', value: 'indexeddb'},

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
