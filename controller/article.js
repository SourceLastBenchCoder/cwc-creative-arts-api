const express = require('express')
const Article = require("../models/Article")

//Create
const createArticle = async (req, res, next) => {
    const newArticle = new Article(req.body)
    try {
        const savedArticle = await newArticle.save()
        res.status(200).json(savedArticle)
    } catch (err) {
        next(err)
    }
}

//update
const updateArticle = async (req, res, next) => {
    try {
        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedArticle)
    } catch (err) {
        next(err)
    }
}

//Delete
const deleteArticle = async (req, res, next) => {
    try {
        const deletedArticle = await Article.findByIdAndDelete(req.params.id, { new: true })
        res.status(200).json(deletedArticle)
    } catch (err) {
        next(err)
    }
}

//Get All
const getAllArticle = async (req, res, next) => {
    try {
        const savedArticle = await Article.find()
        res.status(200).json(savedArticle)
    } catch (err) {
        next(err)
    }
}

//Get By Id
const getArticleById = async (req, res, next) => {
    try {
        const savedArticle = await Article.findById(req.params.id)
        res.status(200).json(savedArticle)
    } catch (err) {
        next(err)
    }
}

module.exports.createArticle = createArticle
module.exports.updateArticle = updateArticle
module.exports.getAllArticle = getAllArticle
module.exports.getArticleById = getArticleById
module.exports.deleteArticle = deleteArticle
