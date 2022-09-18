const express = require('express')
const {
    deleteArticle,
    getAllArticle,
    getArticleById,
    updateArticle,
    createArticle
} = require('../controller/article')
const { verifyAdmin } = require('../utils/verifyToken')


const router = express.Router()

//Create
router.post("/", verifyAdmin,createArticle)

//update
router.put("/:id", verifyAdmin,updateArticle)

//Delete
router.delete("/:id", verifyAdmin,deleteArticle)

//Get All
router.get("/", getAllArticle)

//Get By Id
router.get("/:id", getArticleById)


module.exports = router