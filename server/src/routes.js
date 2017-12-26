//  import authentification module
const AuthenticationController = require('./controllers/AuthenticationController')
//  import module that uses Joi to ensure valid email address is used and password follows requirements, error messages
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  console.log('its an app!')
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  app.post('/login',
    AuthenticationController.login)
}