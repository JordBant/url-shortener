const nanoid = require('nanoid')
const PORT = 3001
const user = require('./routes/form')

const express = require('express')
const app = express()
app.use(express.json());

app.use("/form", user);


// ------------------------------------------------
// server.js validates and authenticates users, 
// ------------------------------------------------

// 1.) Accept user from routes

// ------------------------------------------------

/*
 * 
 * db.js
 * ------------------------
 * 
 * On retreival of new user create model for the firebase.db to accept
 * On retreival of current user:
 *  - Show dasboard of all in-use urls and corresponding stats
 *  - Show 
 * On retreival of current user CRUD request, perform respective CRUD operation on item
 * 
 * */ 

// app.post('/form/:type', (req, res) => {
//     const user = req.body.value
//     const type = req.params.type

//     switch (type) {
//         case 'create':
//             console.log('Got create')
//             break;

//         case 'login':
//             console.log('Got login')
//             break;
//     }

//     console.log('Got Url:', user,)
//     res.json(user)
// })

app.post('/shortener', (req, res) => {
    const url = req.body.value
    console.log('Got Url:', url)
    res.json(url)
})

app.listen(PORT)