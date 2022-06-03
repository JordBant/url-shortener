const axios = require('axios')
const nanoid = require('nanoid')
const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT


app.post('/shorten', (req, res) => {
    const url = req.body.url

    res.json(newURL)
})

app.listen(PORT)