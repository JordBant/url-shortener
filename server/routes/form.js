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

router.post('/:type',(req, res) => {
    const candidate = req.body.value
    const type = req.params.type
    switch (type) {
        case 'create':
            console.log('Got create')
            break;

        case 'login':
            console.log('Got login')
            break;
    } 
   
    console.log('Got Url:', candidate, type)
    res.json(candidate)
})

module.exports = router