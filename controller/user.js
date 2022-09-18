const express = require('express')
const User = require("../models/User.js")


//update
const updateUser = async (req, res,next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}

//Delete
const deleteUser = async (req, res,next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id, { new: true })
        res.status(200).json(deletedUser)
    } catch (err) {
        next(err)
    }
}

//Get All
const getAllUser = async (req, res,next) => {
    try {
        const savedUser = await User.find()
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
}

//Get By Id
const getUserById = async (req, res, next) => {
    try {
        const savedUser = await User.findById(req.params.id)
        res.status(200).json(savedUser)
    } catch (err) {
        next(err)
    }
}

module.exports.updateUser = updateUser
module.exports.getAllUser = getAllUser
module.exports.getUserById = getUserById
module.exports.deleteUser = deleteUser