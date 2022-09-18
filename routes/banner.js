const express = require('express')
const {
    deleteBanner,
    getAllBanner,
    getBannerById,
    updateBanner,
    createBanner
} = require('../controller/banner')


const router = express.Router()

//Create
router.post("/", createBanner)

//update
router.put("/:id", updateBanner)

//Delete
router.delete("/:id", deleteBanner)

//Get All
router.get("/", getAllBanner)

//Get By Id
router.get("/:id", getBannerById)


module.exports = router