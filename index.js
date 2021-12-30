const express = require('express')
const app = express()
const port = 3002
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

  const movies = [
    { title: "Jaws", year: 1975, rating: 8 },
    { title: "Avatar", year: 2009, rating: 7.8 },
    { title: "Brazil", year: 1985, rating: 8 },
    { title: "الإرهاب والكباب", year: 1992, rating: 6.2 },
  ];
  
  // Add movie
  
  app.get("/movies/add", (req, res) => {});
  
  // Get movie
  
  app.get("/movies/get", (req, res) => {
    res.send({
      status: 200,
      data: movies,
    });
  });
  
  // Edit movie
  
  app.get("/movies/edit", (req, res) => {});
  
  // Delete movie
  
  app.get("/movies/delete", (req, res) => {});

//date
app.get('/movies/read/by-date', (req, res) => {
           
    let dateRate = movies.sort((a, b) => {
        return a.year - b.year;
    }) ;
            res.send({
                 status:200,
                data:dateRate
            }
              
            )
     });
     app.get('/movies/read/by-rating', (req, res) => {
           
        let dateRate = movies.sort((a, b) => {
            return a.rating - b.rating;
        }) ;
                res.send({
                     status:200,
                    data:dateRate
                }
                  
                )
         });
     
         app.get('/movies/read/by-title', (req, res) => {
           
            let dateRate = movies.sort((a, b) => {
                return a.title - b.title;
            }) ;
                    res.send({
                         status:200,
                        data:dateRate
                    }
                      
                    )
             });
app.listen(port, () => console.log(`the server started at http://localhost:${port} `
))