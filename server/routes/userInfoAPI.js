/**
 * 
 * userInfoAPI.js
 * ------------------------
 * Perform CRUD actions on current user's database
 * 
 */

const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const url = req.body.value
    console.log('Got Url: ', url)
    res.json(url)
})

module.exports = router