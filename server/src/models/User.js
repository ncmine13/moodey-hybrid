const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword(user, options) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return;
  }

  return bcrypt
    .genSaltAsync((SALT_FACTOR))
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
//  took out other two hooks because password was rehashing and password not matching hash, will revisit: beforeCreate: hashPassword, beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })
//  making user model vs. the controller do the password comparison when logging in
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }
  return User
}