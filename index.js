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

app.get("/hello/:id", (req, res) => {
    res.send({
      status: 200,
      message: "hello",
      Id: req.params.id,
    });
  });
  app.get("/hello", (req, res) => {
    res.send({
      status: 200,
      message: "hello",
    });
  });
  
  // Search
  
  app.get("/search/s=:search", (req, res) => {
    res.send({
      status: 200,
      maeesage: "ok",
      data: req.params.search,
    });
  });
  
  app.get("/search/s=", (req, res) => {
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  });
  
app.listen(port, () => console.log(`the server started at http://localhost:${port} `
))