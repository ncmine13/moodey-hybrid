module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    // id: DataTypes.INTEGER,
    // name: DataTypes.STRING,
    // dob: DataTypes.STRING,
    // genderId: DataTypes.STRING,
    // employment: DataTypes.STRING,
    // prefs: DataTypes.ARRAY(Sequelize.TEXT),
    // occupation: DataTypes.STRING,
    // education: DataTypes.STRING,
    // conditions: DataTypes.STRING,
    // meds: DataTypes.STRING,
    // pets: DataTypes.STRING
  })

  Profile.associate = function (models) {
  }

  return Profile
}