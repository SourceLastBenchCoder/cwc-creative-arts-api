const express = require('express')
const {
    deleteUser,
    getAllUser,
    getUserById,
    updateUser
} = require('../controller/user.js')
const { verifyAdmin, verifyUser } = require('../utils/verifyToken.js')


const router = express.Router()

//update
router.put("/:id", verifyUser, updateUser)

//Delete
router.delete("/:id", verifyUser, deleteUser)

//Get All
router.get("/", getAllUser)

//Get By Id
router.get("/:id", getUserById)


module.exports = router