const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

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

const PORT = process.env.PORT || 9898

app.listen(PORT, () => {
    console.log(`SERVER STARTED AT PORT ${PORT}`)
})



