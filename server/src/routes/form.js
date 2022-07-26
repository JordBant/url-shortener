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
const { checkSensitiveInput, jettisonNull} = require('../validation')


router.post('/:type',(req, res) => {
    const candidate = req.body.value
    const type = req.params.type
    switch (type) {
        case ':create':
            // check username
            // 
            addUser(jettisonNull(candidate))
            break;

        case 'login':
            console.log(`Got ${type}. Should be login`)
            break;
    } 
    // addUser()
    // const newCandidate = jettisonNull(candidate)
    // console.log('hi', newCandidate)
    // console.log('Got Url:', candidate, type)
    res.json('Signup Complete')
})

module.exports = router