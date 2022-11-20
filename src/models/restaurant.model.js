const Restaurant = (connect, Sequelize) => {
  const restaurant = connect.define('data_restaurants', {
    id: {
      type: Sequelize.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    nama: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    alamat: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    kota: {
      type: Sequelize.STRING(25),
      allowNull: false
    },
    deskripsi: {
      type: Sequelize.TEXT('tiny'),
      allowNull: true
    }
  });

  return restaurant
}

module.exports = Restaurant