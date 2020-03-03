<template>
  <el-menu :default-openeds="['1']">

    <el-submenu index="1">
      <template slot="title">IndexedDB</template>
      <el-menu-item-group>
        <el-menu-item index="1-1"><div><i class="el-icon-coin"></i> Database 1</div></el-menu-item>
        <el-menu-item index="1-2"><div><i class="el-icon-coin"></i> Database 2</div></el-menu-item>
        <el-menu-item index="1-3"><div><i class="el-icon-coin"></i> Database 3</div></el-menu-item>
      </el-menu-item-group>

      <!-- Database -->
      <el-submenu index="1-4">
        <template slot="title"><div><i class="el-icon-coin"></i> Database 4</div></template>
        <el-menu-item-group>
          <!-- Store -->
          <el-submenu index="1-4-1" >
            <template slot="title"><div><i class="el-icon-s-grid"></i> Store 1</div></template>

            <!-- Index -->
            <el-menu-item-group>
              <el-menu-item index="1-4-1-1"><div><i class="el-icon-notebook-2"></i> Index 1</div></el-menu-item>
              <el-menu-item index="1-4-1-2"><div><i class="el-icon-notebook-2"></i> Index 2</div></el-menu-item>
              <el-menu-item index="1-4-1-3"><div><i class="el-icon-notebook-2"></i> Index 3</div></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu-item-group>
      </el-submenu>
    </el-submenu>

  </el-menu>
</template>


<script lang="ts">
  export default {
    data: () => ({
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
