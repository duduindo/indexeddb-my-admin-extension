import MessageFactory from '@/models/Message/MessageFactory'
import fetchContent from '@/models/FetchContent/fetchContent'


jest.mock('@/models/Message/MessageFactory')


describe('fetchContent', () => {
  let listener;
  let send;

  beforeAll(() => {
    listener = jest.fn()
    send = jest.fn()
    // @ts-ignore
    MessageFactory.mockImplementationOnce(() => ({ listener, send }))
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  afterAll(() => {
    jest.unmock('@/models/Message/MessageFactory')
  })

  it('Should get a content with GET method', async () => {
    const idTab = 123
    const url = 'https://localhost/page/one'
    const init = {}
    const result = await fetchContent(idTab, url)

    expect(listener).toHaveBeenCalledTimes(1)
    expect(send).toHaveBeenCalledTimes(1)
  })

})
