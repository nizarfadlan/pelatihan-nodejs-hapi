const User = (connect, Sequelize) => {
  const user = connect.define('users', {
    id: {
      type: Sequelize.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return user
}

module.exports = User