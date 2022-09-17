const express = require('express')
const {
    deleteArticle,
    getAllArticle,
    getArticleById,
    updateArticle,
    createArticle
} = require('../controller/article')


const router = express.Router()

//Create
router.post("/", createArticle)

//update
router.put("/:id", updateArticle)

//Delete
router.delete("/:id", deleteArticle)

//Get All
router.get("/", getAllArticle)

//Get By Id
router.get("/:id", getArticleById)


module.exports = router