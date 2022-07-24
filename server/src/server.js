const nanoid = require('nanoid')
const PORT = 3001
const candidate = require('./routes/form')
const user = require('./routes/userInfoApi')
const checkInputs = require('./validation')
 
const express = require('express')
const app = express()

app.use(express.json());
app.use("/form", candidate);
app.use("/action", user);
// console.log(
//     checkInputs('vaserv', 'lyv@231.comaf.qef', 'arg13aadv')
// )

// ------------------------------------------------
// server.js validates and authenticates users, 
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

app.listen(PORT)