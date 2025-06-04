const express = require('express')
const path = require('path') 
const app = express()
const port = 3000
require('dotenv').config();
const mongoose = require('mongoose');
const Mydata = require('../models/myschema');
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port, () => {
    // console.log(`http://localhost:${port}/`);
  });
 })
 .catch((err) => {
   console.log(err);
 });


app.get('/', (req, res) => {
  Mydata.find().then((data) => {
    // console.log(data);
    res.render('home', { title: 'Home page', arr: data });
  }
).catch((err) => {
  console.error('Error fetching data:', err);
});
})

app.post('/', (req, res) => {
  console.log(req.body);
  const myData = new Mydata(req.body);
  myData.save().then(() => {
    console.log('Data saved successfully');  
    res.redirect('/');
  }).catch((err) => {
    console.error('Error saving data:', err);
  });
  
})
