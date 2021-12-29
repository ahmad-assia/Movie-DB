const express = require('express')
const app = express()
const port = 3001
app.get('/', (req, res) => {
    res.send('ok')
 
})


app.get('/test', (req, res) => {
    res.send( {status:200,message:"ok"})
 
})
app.get('/time', (req, res) => {
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 
})


app.listen(port, () => console.log(`the server started at http://localhost:${port} `
))