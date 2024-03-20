const mongoose = require('mongoose')

const OfferSchema = new mongoose.Schema({
    title: String,
    description: String,
    salary: Number,
    corporation: String
})

const Offer = mongoose.model('Offer', OfferSchema)

module.exports = Offer