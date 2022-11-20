const db = require('../models')
const User = db.user

const insertUserData = async(data) => {
  const dataResult = await User.create(data)
  return dataResult.id
}

const getAllUserData = async() => {
  return await User.findAll()
}

const getOneUserData = async(id) => {
  return await User.findByPk(id)
}

const updateOneUserData = async(id, data) => {
  const dataAsli = getOneUserData(id)

  const username = data.username || dataAsli.username
  const password = data.password || dataAsli.password

  return await User.update({ username: username, password: password }, {
    where: {
      id
    }
  })
}

const deleteOneUserData = async(id) => {
  return await User.destroy({
    where: {
      id
    }
  })
}

const checkUserID = async(id) => {
  const data = await User.findAll({
    where: {
      id
    }
  })

  return data.length >= 1
}

const checkUsername = async(username) => {
  const data = await User.findAll({
    where: {
      username: username
    }
  })

  return data.length >= 1
}

module.exports = { insertUserData, getAllUserData, getOneUserData, updateOneUserData, deleteOneUserData, checkUserID, checkUsername }