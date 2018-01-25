module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    userId: DataTypes.SMALLINT,
    name: DataTypes.STRING,
    dob: DataTypes.STRING,
    genderId: DataTypes.STRING,
    employment: DataTypes.STRING,
    prefs: DataTypes.STRING,
    occupation: DataTypes.STRING,
    education: DataTypes.STRING,
    conditions: DataTypes.BOOLEAN,
    meds: DataTypes.BOOLEAN,
    pets: DataTypes.BOOLEAN
  })

  Profile.associate = function (models) {
  }

  return Profile
}