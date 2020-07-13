<script>
  import { onMount } from 'svelte'
  import { link } from 'svelte-spa-router'
  import { querystring } from 'svelte-spa-router'
  import { data } from 'views/svelte/stores'
  import payloadToPromise from 'views/svelte/utils/payloadToPromise'


  let storages = []
  const type = 'GET_STRUCTURE_FROM_DATABASE'

  $: handleData($data)
  $: list = []

  // onMount(() => {
  //   const params = {
  //     storage: 'indexeddb',
  //   }

  //   data.request(type, params)
  // })


  function handleData(action) {
    const isThisType = action.type === type

    if (!isThisType) {
      return;
    }

    console.log(action)

    // payloadToPromise(action.payload)
    //   .then(value => {

    //       console.log('Expander value: ', value)
    //     })
    //     .catch(err => alert(err))
  }


  $: storages = [
    {
      name: 'IndexedDB',
      id: 'indexeddb',
      databases: [
        {
          name: "biblioteca2",
          version: 158272957993319,
          tables: [
            // Corredores
            {
              name: "corredores",
              keyPath: 'key path name here',
              autoIncrement: true,
              indexes: [
                {
                  name: "por_corredor2",
                  keyPath: 'key path index 1',
                  unique: true,
                },
                {
                  name: "por_corredor2020",
                  keyPath: 'key path index 2',
                  unique: true,
                },
                {
                  name: "por_corredorlalala",
                  keyPath: 'key path index 3',
                  unique: false,
                }
              ],
            },
          ],
        },

        // Library
        {
          name: "library",
          version: 11,
          tables: [
            {
              name: "books",
              keyPath: 'key path name here',
              autoIncrement: true,
              indexes: [
                {
                  name: "by_title",
                  keyPath: 'key path index 1',
                  unique: true,
                },
              ],
            },
            {
              name: "computer",
              keyPath: 'key path name here',
              autoIncrement: true,
              indexes: [
                {
                  name: "by_title",
                  keyPath: 'key path index 1',
                  unique: true,
                },
                {
                  name: "by_id",
                  keyPath: 'key path index 1',
                  unique: true,
                },
              ],
            },
            {
              name: "e-books",
              keyPath: 'key path name here',
              autoIncrement: true,
              indexes: [
                {
                  name: "by_title",
                  keyPath: 'key path index 1',
                  unique: true,
                },
              ],
            },
            {
              name: "papers",
              keyPath: 'key path name here',
              autoIncrement: true,
              indexes: [
                {
                  name: "by_title",
                  keyPath: 'key path index 1',
                  unique: true,
                },
                {
                  name: "by_type",
                  keyPath: 'key path index 1',
                  unique: true,
                },
              ],
            },
          ],
        },

        {
          name: "gih-reservations",
          version: 12,
          tables: [
            {
              name: "reservations",
              keyPath: 'sdsdsasdsa',
              autoIncrement: true,
              indexes: []
            }
          ]
        }

        // {
        //   name: "Database 4",
        //   version: 158272957993319,
        //   tables: [
        //     {
        //       name: "Store 1",
        //       keyPath: 'key path name here',
        //       autoIncrement: true,
        //       indexes: [
        //         {
        //           name: "Index 1",
        //           keyPath: 'key path index 1',
        //           unique: true,
        //         },
        //         {
        //           name: "Index 2",
        //           keyPath: 'key path index 2',
        //           unique: true,
        //         },
        //         {
        //           name: "Index 3",
        //           keyPath: 'key path index 3',
        //           unique: true,
        //         },
        //       ]
        //     },
        //     {
        //       name: "Store 2",
        //       keyPath: 'key path name here',
        //       autoIncrement: true,
        //       indexes: [
        //         {
        //           name: "Index 1",
        //           keyPath: 'key path index 1',
        //           unique: true,
        //         },
        //         {
        //           name: "Index 2",
        //           keyPath: 'key path index 2',
        //           unique: true,
        //         },
        //         {
        //           name: "Index 3",
        //           keyPath: 'key path index 3',
        //           unique: true,
        //         },
        //       ]
        //     },

        //   ]
        // },
      ],
    } // indexeddb
  ];

</script>

<ul>
  <li><a href="/" use:link>Home</a></li>
</ul>

{#each storages as storage}
  <p class="menu-label">{ storage.name }</p>

  <!-- Databases -->
  <ul class="menu-list">
    {#each storage.databases as database}
      <li>
        <a href="/database/?storage={storage.id}&database={database.name}&version={database.version}" use:link>{ database.name }</a>

        <ul>
          <!-- Tables -->
          {#each database.tables as table}
            <a href="/table/?storage={storage.id}&database={database.name}&version={database.version}&table={table.name}" use:link>{ table.name }</a>

            <ul>
              <!-- Indexes -->
              {#each table.indexes as index}
                <a href="/index/?storage={storage.id}&database={database.name}&version={database.version}&table={table.name}&index={index.name}" use:link>{ index.name }</a>
                <!-- <a href="/index/{storage.id}/{database.name}/{database.version}/{table.name}/{index.name}/" use:link>{ index.name }</a> -->
              {/each}
            </ul>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
{/each}
