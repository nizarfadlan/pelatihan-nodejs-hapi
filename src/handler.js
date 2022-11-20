const { insertUserData, getAllUserData, getOneUserData, updateOneUserData, deleteOneUserData, checkUserID, checkUsername } = require('./controllers/user.controller')

const { insertRestaurantData, getAllRestaurantData, getOneRestaurantData, updateOneRestaurantData, deleteOneRestaurantData, checkRestaurantID } = require('./controllers/restaurant.controller')
const { response } = require('@hapi/hapi/lib/validation')

/* API */

const insertUserDataHandler = async(request, h) => {

  if (!request.payload.id || !request.payload.username || !request.payload.password) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambah user. Mohon isi semua",
    })
    response.code(400)
    return response
  }

  if (request.payload.id.length > 8) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambah user. User ID lebih dari 8",
    })
    response.code(400)
    return response
  }

  const checkID = await checkUserID(request.payload.id)
  if (checkID) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambah user. User id sudah ada",
    })
    response.code(400)
    return response
  }

  const checkUser = await checkUsername(request.payload.username)
  if (checkUser) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambah user. Username sudah ada",
    })
    response.code(400)
    return response
  }

  var data = await insertUserData(request.payload)

  const response = h.response({
    status: 'success',
    data
  })

  response.code(200)
  return response
}

const getUserDataHandler = async(request, h) => {
  var data = await getAllUserData()
  
  const response = h.response({
    status: 'success',
    data
  })

  response.code(200)
  return response
}

const getOneUserDataHandler = async(request, h) => {
  var data = await getOneUserData(request.params.userID)
  
  const response = h.response({
    status: 'success',
    data
  })

  response.code(200)
  return response
}

const updateUserHandler = async(request, h) => {
  if (!request.params.userID || !request.payload) {
    const response = h.response({
      status: "fail",
      message: "Gagal update user. Mohon isi user id dan data yang diperbarui",
    })
    response.code(400)
    return response
  }

  var data = await updateOneUserData(request.params.userID, request.payload)
  
  const response = h.response({
    status: 'success',
    data: data[0]
  })

  response.code(200)
  return response
}

const deleteUserHandler = async(request, h) => {
  if (!request.params.userID) {
    const response = h.response({
      status: "fail",
      message: "Gagal delete user. Mohon isi user id",
    })
    response.code(400)
    return response
  }

  var data = await deleteOneUserData(request.params.userID)

  const response = h.response({
    status: 'success',
    data
  })

  response.code(200)
  return response
}

const insertRestorantDataHandler = async(request, h) => {
  if (!request.payload.id || !request.payload.nama || !request.payload.alamat) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambah restorant. Mohon isi id, nama dan alamat",
    })
    response.code(400)
    return response
  }

  if (request.payload.id.length > 8) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambah restorant. Restorant ID lebih dari 8",
    })
    response.code(400)
    return response
  }

  const check = await checkRestaurantID(request.payload.id)
  if (check) {
    const response = h.response({
      status: "fail",
      message: "Gagal menambah restorant. Restorant ID sudah ada",
    })
    response.code(400)
    return response
  }

  var data = await insertRestaurantData(request.payload)

  const response = h.response({
    status: 'success',
    data
  })

  response.code(200)
  return response
}

const getRestorantDataHandler = async(request, h) => {
  var data = await getAllRestaurantData()
  
  const response = h.response({
    status: 'success',
    data
  })

  response.code(200)
  return response
}

const getOneRestorantDataHandler = async(request, h) => {
  var data = await getOneRestaurantData(request.params.restorantID)
  
  const response = h.response({
    status: 'success',
    data
  })

  response.code(200)
  return response
}

const updateRestorantHandler = async(request, h) => {
  if (!request.params.restorantID || !request.payload) {
    const response = h.response({
      status: "fail",
      message: "Gagal update restaurant. Mohon isi user id dan data yang diperbarui",
    })
    response.code(400)
    return response
  }

  var data = await updateOneRestaurantData(request.params.restorantID, request.payload)
  
  const response = h.response({
    status: 'success',
    data: data[0]
  })

  response.code(200)
  return response
}

const deleteRestorantHandler = async(request, h) => {
  if (!request.params.restorantID) {
    const response = h.response({
      status: "fail",
      message: "Gagal delete user. Mohon isi user id",
    })
    response.code(400)
    return response
  }

  var data = await deleteOneRestaurantData(request.params.restorantID)

  const response = h.response({
    status: 'success',
    data
  })

  response.code(200)
  return response
}

/* Page */
const homeHandler = async(request, h) => {
  const data = await getAllRestaurantData()

  const response = h.view('pages/home.html', { title: 'Home', active: { active_home: true }, data: data })

  response.code(200)
  return response
}

const favoriteHandler = async(request, h) => {
  const data = await getAllRestaurantData()

  const response = h.view('pages/favorite.html', { title: 'Favorite', active: { active_favorite: true }, data: data })

  response.code(200)
  return response
}

const restaurantHandler = async(request, h) => {
  const data = await getOneRestaurantData(request.params.restaurantID)
  
  const response = h.view('pages/restaurant.html', { title: data.dataValues.nama, active: { active_favorite: true }, data: data })

  response.code(200)
  return response
}

module.exports = { homeHandler, favoriteHandler, restaurantHandler, insertUserDataHandler, getUserDataHandler, getOneUserDataHandler, updateUserHandler, deleteUserHandler, insertRestorantDataHandler, getRestorantDataHandler, getOneRestorantDataHandler, updateRestorantHandler, deleteRestorantHandler }