const mongoose = require('mongoose');

const productSchema = new mongoose.schema ({
    name: {
        type: String,
        required: [true, "Product name must be provided"]
    }, 
    price: {
        type: Number,
        required: [true, "Price must be included"]
    },
    ratings: {
        type: Number,
        default: 4.5
    },
    featured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'lizzy', 'caresa', 'marcos']},
            message: '{VALUE} is not supported'
    }
})

module.exports =mongoose.model(productSchema, "Product")