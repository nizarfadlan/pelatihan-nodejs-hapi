const { insertUserDataHandler, getUserDataHandler, getOneUserDataHandler, updateUserHandler, deleteUserHandler, insertRestorantDataHandler, getRestorantDataHandler, getOneRestorantDataHandler, updateRestorantHandler, deleteRestorantHandler, homeHandler, favoriteHandler, restaurantHandler } = require('./handler')
const path = require('path')

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: homeHandler
  },
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: path.normalize(__dirname + '/public')
      }
    }
  },
  {
    method: 'GET',
    path: '/favorite',
    handler: favoriteHandler
  },
  {
    method: 'GET',
    path: '/restaurant/{restaurantID}',
    handler: restaurantHandler
  },
  {
    method: 'GET',
    path: '/api/user',
    handler: getUserDataHandler
  },
  {
    method: 'POST',
    path: '/api/user',
    handler: insertUserDataHandler
  },
  {
    method: 'GET',
    path: '/api/user/{userID}',
    handler: getOneUserDataHandler
  },
  {
    method: 'PUT',
    path: '/api/user/{userID}',
    handler: updateUserHandler
  },
  {
    method: 'DELETE',
    path: '/api/user/{userID}',
    handler: deleteUserHandler
  },
  {
    method: 'GET',
    path: '/api/restaurant',
    handler: getRestorantDataHandler
  },
  {
    method: 'POST',
    path: '/api/restaurant',
    handler: insertRestorantDataHandler
  },
  {
    method: 'GET',
    path: '/api/restaurant/{restorantID}',
    handler: getOneRestorantDataHandler
  },
  {
    method: 'PUT',
    path: '/api/restaurant/{restorantID}',
    handler: updateRestorantHandler
  },
  {
    method: 'DELETE',
    path: '/api/restaurant/{restorantID}',
    handler: deleteRestorantHandler
  }
]

module.exports = routes