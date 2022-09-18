const mongoose = require("mongoose")

const BannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    smallDescription: {
        type: String,
        required: true
    },
    banner: {
        type: String
    },
    buttonText: {
        type: String,
        required: true
    },
    btnRedirectUrl: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Banner", BannerSchema)