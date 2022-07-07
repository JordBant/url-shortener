const axios = require('axios')
const nanoid = require('nanoid')
const PORT = 3001 || process.env.PORT
// const mongo = require('mongoose')

const express = require('express')
const app = express()
app.use(express.json());

app.post('/form/:type', (req, res) => {
    const user = req.body.value
    const type = req.params.type

    // switch (type) {
    //     case 'Create':
            
    //         break;

    //     case 'Login':
            
    //         break;
    // }

    console.log('Got Url:', url)
    res.json(user)
})

app.post('/shortener', (req, res) => {
    const url = req.body.value
    console.log('Got Url:', url)
    res.json(url)
})

app.listen(PORT)