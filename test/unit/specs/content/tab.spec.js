import Tab from '@/content/tab'


describe('Tab', () => {
  describe('Get host', () => {
    test('Should get host of tab', () => {
      const tab = new Tab()

      expect(tab.getHost()).toBe('localhost')
    })
  })
})
