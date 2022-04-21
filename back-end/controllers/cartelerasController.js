const carteleraModel = require("../models/carteleras")

/**
 * obtener todas las carteleras
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await carteleraModel.find({})
    res.send({ a:1 })

}
/**
 * obtener todas las carteleras
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {

}
/**
 * cear una cartelera
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {

}
/**
 * modificar una cartelera
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {

}
/**
 * borrar una cartelera
 * @param {*} req 
 * @param {*} res 
 */
const deleteItems = async (req, res) => {

}

module.exports = {getItem, getItems, createItem, updateItem, deleteItems}