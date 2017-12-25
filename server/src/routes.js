//  import authentification module
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')


module.exports = (app) => {
  console.log('its an app!')
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )
}