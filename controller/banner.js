const express = require('express')
const Banner = require("../models/Banner")

//Create
const createBanner = async (req, res, next) => {
    const newBanner = new Banner(req.body)
    try {
        const savedBanner = await newBanner.save()
        res.status(200).json(savedBanner)
    } catch (err) {
        next(err)
    }
}

//update
const updateBanner = async (req, res, next) => {
    try {
        const updatedBanner = await Banner.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedBanner)
    } catch (err) {
        next(err)
    }
}

//Delete
const deleteBanner = async (req, res, next) => {
    try {
        const deletedBanner = await Banner.findByIdAndDelete(req.params.id, { new: true })
        res.status(200).json(deletedBanner)
    } catch (err) {
        next(err)
    }
}

//Get All
const getAllBanner = async (req, res, next) => {
    try {
        const savedBanner = await Banner.find()
        res.status(200).json(savedBanner)
    } catch (err) {
        next(err)
    }
}

//Get By Id
const getBannerById = async (req, res, next) => {
    try {
        const savedBanner = await Banner.findById(req.params.id)
        res.status(200).json(savedBanner)
    } catch (err) {
        next(err)
    }
}

module.exports.createBanner = createBanner
module.exports.updateBanner = updateBanner
module.exports.getAllBanner = getAllBanner
module.exports.getBannerById = getBannerById
module.exports.deleteBanner = deleteBanner
