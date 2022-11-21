const Sequelize = require('sequelize')
const restaurantModel = require('./restaurant.model')
const userModel = require('./user.model')

const connect = new Sequelize('restaurant', 'root', 'nizar', {
  host: 'localhost',
  dialect: 'mariadb'
})

connect.sync().then(() => {
  console.log('Successfully Connect Database')
}, (err) => {
  console.log(err)
})

const db = {}

db.Sequelize = Sequelize
db.connect = connect

db.restaurant = restaurantModel(connect, Sequelize)
db.user = userModel(connect, Sequelize)

module.exports = db