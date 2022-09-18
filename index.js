const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const articleRoot = require('./routes/article')
const bannerRoot = require('./routes/banner')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log("MONGO DB CONNECTED SUCCESSFULLY")
    })
    .catch((err) => {
        console.log("Error occurred while connecting Mongo DB : " + err.message)
    })

app.get("/", (req, res) => {
    res.send({ status: "API Application Running Successfully" })
})

app.use("/api/article", articleRoot)
app.use("/api/banner", bannerRoot)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Error Occurred Something went wrog"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

const PORT = process.env.PORT || 9898

app.listen(PORT, () => {
    console.log(`SERVER STARTED AT PORT ${PORT}`)
})