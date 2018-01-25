const { Profile } = require('../models')

module.exports = {
  async genProfile (req, res) {
    try {
      const profile = await Profile.create(req.body)
      const profileJson = profile.toJSON()
      res.send({profile: profileJson})
    } catch (err) {
      console.log(err, "EROROROROROROR")
      res.status(500).send({
        error: 'an error has occurred trying to create your profile'
      })
    }
  }
}