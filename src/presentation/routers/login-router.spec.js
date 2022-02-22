class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.email) {
      return { statusCode: 400 }
    }
  }
}

describe('Login Router', () => {
  test('Should return 400 if no email is provideed', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      password: 'any_password'
    }
    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
