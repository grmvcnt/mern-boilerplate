const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const offers_routes = require('./routes/offers')

// get .env variables
require('dotenv').config({ path: '../.env' })

// server setup
app.use(express.json())
app.use(cors())
app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on PORT ${process.env.APP_PORT}`)
})

// db setup
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected..')
})

// offers routes
app.use('/api/offers', offers_routes)
