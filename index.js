const express = require("express") ;


const app = express();


app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use(express.json());


const check = require("./middleware")


app.get('/', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('home');
  });

  app.get('/services', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('services');
  });


  app.get('/conctact', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('conctact');
  });



  app.post('/mail',async (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    try {
      const sender = require("./lib/mailer")
      console.log(req.body)
      await sender(req.body)
      res.status(200).json(req.body)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  });











app.listen(4000, () => {
    console.log("server is up on 4000");
  });