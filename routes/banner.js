const express = require('express')
const {
    deleteBanner,
    getAllBanner,
    getBannerById,
    updateBanner,
    createBanner
} = require('../controller/banner')
const { verifyAdmin } = require('../utils/verifyToken')


const router = express.Router()

//Create
router.post("/", verifyAdmin, createBanner)

//update
router.put("/:id", verifyAdmin, updateBanner)

//Delete
router.delete("/:id", verifyAdmin, deleteBanner)

//Get All
router.get("/", getAllBanner)

//Get By Id
router.get("/:id", getBannerById)


module.exports = router