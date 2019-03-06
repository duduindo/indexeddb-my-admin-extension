export default {
  trees:
  [
    {
      domain: 'www.example.com',
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
                }
              ]
            }
          ]
        }
      ]
    },

    {
      domain: 'www.google.com',
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
