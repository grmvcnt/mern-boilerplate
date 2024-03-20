const express = require('express')
const router = express.Router()

const {
    getOffers,
    getOffer,
    createOffer,
    updateOffer,
    deleteOffer
} = require('../controllers/offers.js')

// CRUD Offers
router.get('/', getOffers)
router.get('/:offerID', getOffer)
router.post('/', createOffer)
router.put('/:offerID', updateOffer)
router.delete('/:offerID', deleteOffer)

module.exports = router