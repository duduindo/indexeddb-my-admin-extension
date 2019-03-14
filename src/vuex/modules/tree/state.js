export default {
  trees:
  [
    {
      host: 'localhost:8081',
      databases: [
        {
          name: 'database-1',
          version: 1,
          stores: [
            {
              name: 'store-1',
              indexes: [
                {
                  name: 'index-1'
                },
                {
                  name: 'index-12'
                }
              ]
            }
          ]
        },
        {
          name: 'database-12',
          version: 2,
          stores: [
            {
              name: 'store-12',
              indexes: [
                {
                  name: 'index-12'
                }
              ]
            }
          ]
        }
      ]
    },

    {
      host: 'www.google.com',
      databases: [
        {
          name: 'database-22',
          version: 22,
          stores: [
            {
              name: 'store-22',
              indexes: [
                {
                  name: 'index-22'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
