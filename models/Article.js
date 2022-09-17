const mongoose = require("mongoose")

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    smallDescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    banner: {
        type: String,
        required: true
    },
    feature: {
        slider: {
            type: String
        },
        featured: {
            type: String
        },
        topone: {
            type: String
        }
    },
    comments: [
        {
            fullName: {
                type: String
            },
            emailId: {
                type: String
            },
            commentDesc: {
                type: String
            }
        }
    ],
    tags: {
        type: Array
    },
    isActive: {
        type: Boolean
    }
}, { timestamps: true })

module.exports = mongoose.model("Article", ArticleSchema)