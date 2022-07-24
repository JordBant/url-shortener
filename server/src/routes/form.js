/**
 * 
 * candidateValidation.js
 * ------------------------
 * POST New User if info passes imported checks from candidateValidation
 * POST info to authenticate returning User
 * 
 */

const express = require('express')
const router = express.Router()
const { addUser } = require('../firebase-db/firebase.config')
// const checkInputs = require('../validation')


router.post('/:type',(req, res) => {
    const candidate = req.body.value
    const type = req.params.type
    switch (type) {
        case ':create':
            console.log(`Got ${type}. Should be create`)
            break;

        case 'login':
            console.log(`Got ${type}. Should be login`)
            break;
    } 
    // addUser()
    addUser()
    console.log('Got Url:', candidate, type)
    res.json('Signup Complete')
})

module.exports = router