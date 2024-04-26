const express = require("express") ;


const app = express();


app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('views'));



const check = require("./middleware")


app.get('/', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('home');
  });

  app.get('/services', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('services');
  });


  app.get('/contact', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('contact');
  });












app.listen(4000, () => {
    console.log("server is up on 4000");
  });