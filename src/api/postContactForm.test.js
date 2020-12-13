import postContactForm from './postContactForm'

const stubbedFormData = {
  name: 'Eric',
  email: 'eric@videostudio.com',
  phoneNumber: '12345678',
  message: 'Hi there!',
  _honeypot: false,
}

describe('Post contact form', () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve())
  })
  beforeEach(() => {
    global.fetch.mockClear()
  })
  afterAll(() => {
    delete global.fetch
  })

  it('should call the correct endpoint with the correct url, request method and request headers and body', async () => {
    global.fetch.mockResolvedValueOnce({
      status: 200,
    })

    await postContactForm(stubbedFormData)

    expect(global.fetch.mock.calls[0][0]).toBe('https://submit-form.com/foo')
    expect(global.fetch.mock.calls[0][1].method).toBe('POST')
    expect(global.fetch.mock.calls[0][1].headers).toEqual({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    })
    expect(global.fetch.mock.calls[0][1].body).toBe(
      JSON.stringify(stubbedFormData)
    )
  })

  it('should return a response with success property set to true if the api responds with a 200 status', async () => {
    global.fetch.mockResolvedValueOnce({
      status: 200,
    })

    const response = await postContactForm(stubbedFormData)

    expect(response.success).toBeTruthy()
  })

  it('should return a response with success property set to false if the api responds with a status that isnt a 200', async () => {
    global.fetch.mockResolvedValueOnce({
      status: 500,
    })

    const response = await postContactForm(stubbedFormData)

    expect(response.success).toBeFalsy()
  })
})
