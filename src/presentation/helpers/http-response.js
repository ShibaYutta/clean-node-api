const MissingParamError = require('./missing-param-error')
module.exports = class httpResponse {
  static badRequest (param) {
    return {
      statusCode: 400,
      body: new MissingParamError(param)
    }
  }

  static severError () {
    return {
      statusCode: 500
    }
  }
}
