import Tab from '@/content/tab'


describe('Tab', () => {
  describe('Get host', () => {
    test('Should get host of tab', () => {
      const tab = new Tab()
      const result = {
        data: 'localhost',
        text: 'Success',
        type: 'success',
        timeStamp: 0
      }

      expect(tab.getHost()).toEqual(result)
    })
  })
})
