import Chrome from '../chrome'


describe('Chrome Environment', () => {
  const chromeExtension = new Chrome;

  test('Load extension', () => {
    chromeExtension.addEventListener('load', () => {
      console.warn('Helllo')
    })
  })

})
