const db = require('../models')
const Restaurant = db.restaurant

const insertRestaurantData = async(data) => {
  const dataResult = await Restaurant.create(data)
  return dataResult.id
}

const getAllRestaurantData = async() => {
  return await Restaurant.findAll()
}

const getOneRestaurantData = async(id) => {
  return await Restaurant.findByPk(id)
}

const updateOneRestaurantData = async(id, data) => {
  return await Restaurant.update({ nama: data.nama, alamat: data.alamat, kota: data.kota, deskripsi: data.deskripsi }, {
    where: {
      id
    }
  })
}

const deleteOneRestaurantData = async(id) => {
  return await Restaurant.destroy({
    where: {
      id
    }
  })
}

const checkRestaurantID = async(id) => {
  const data = await Restaurant.findAll({
    where: {
      id
    }
  })

  return data.length >= 1
}

module.exports = { insertRestaurantData, getAllRestaurantData, getOneRestaurantData, updateOneRestaurantData, deleteOneRestaurantData, checkRestaurantID }