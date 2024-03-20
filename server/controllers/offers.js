const Offer = require('../models/Offer.js')

const getOffers = ((req, res) => {
    Offer.find({})
        .then(result => res.status(200).json(result))
        .catch( error => res.status(500).json({msg: error}))
})

const getOffer = ((req, res) => {
    Offer.findOne({ _id: req.params.offerID })
        .then(result => res.status(200).json(result))
        .catch(() => res.status(404).json({msg: 'Offer not found'}))
})

const createOffer = ((req, res) => {
    Offer.create(req.body)
        .then(result => res.status(200).json(result))
        .catch((error) => res.status(500).json({ msg: error }))
})

const updateOffer = ((req, res) => {
    Offer.findOneAndUpdate({ _id: req.params.offerID }, req.body, { new: true, runValidators: true })
        .then(result => res.status(200).json(result))
        .catch(() => res.status(404).json({ msg: 'Offer not found' }))
})

const deleteOffer = ((req, res) => {
    Offer.findOneAndDelete({ _id: req.params.offerID })
        .then(result => res.status(200).json(result))
        .catch(() => res.status(404).json({msg: 'Offer not found'}))
})

module.exports = {
    getOffers,
    getOffer,
    createOffer,
    updateOffer,
    deleteOffer
}