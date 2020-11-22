// import MessageFactory from '@/models/Message/MessageFactory'
// import FetchManager from '@/models/FetchContent/FetchManager'


// jest.mock('@/models/Message/MessageFactory')


// describe('FetchManager', () => {
//   let listener;
//   let send;

//   beforeAll(() => {
//     listener = jest.fn()
//     send = jest.fn()
//     // @ts-ignore
//     MessageFactory.mockImplementationOnce(() => ({ listener, send }))
//   })

//   afterEach(() => {
//     jest.resetAllMocks()
//   })

//   afterAll(() => {
//     jest.unmock('@/models/Message/MessageFactory')
//   })

//   it('Should get a content with GET method', async () => {
//     const idTab = 123
//     const url = 'https://localhost/page/one'
//     const init = {}
//     const result = await new FetchManager(idTab, url)

//     console.log(result)

//     // expect(listener).toHaveBeenCalledTimes(1)
//     // expect(send).toHaveBeenCalledTimes(1)
//   })

// })
