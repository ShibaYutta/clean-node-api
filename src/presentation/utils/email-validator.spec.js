const validator = require('validator')

class EmailValidator {
  constructor (validator) {
    this.validator = validator
  }

  isValid (email) {
    return this.validator.isEmail(email)
  }
}

const makeSut = () => {
  return new EmailValidator(validator)
}
describe('Email Validator', () => {
  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isEmailValid = sut.isValid('valid_email@email.com')
    expect(isEmailValid).toBe(true)
  })
  test('Should return false if validator returns false', () => {
    validator.isEmailValid = false
    const sut = makeSut()
    const isEmailValid = sut.isValid('invalid_email@email.com')
    expect(isEmailValid).toBe(false)
  })
  test('Should call validator with correct email', () => {
    const sut = makeSut()
    sut.isValid('any_email@email.com')
    expect(sut.validator.email).toBe('any_email@email.com')
  })
})
