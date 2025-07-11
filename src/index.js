const express = require('express')
const path = require('path') 
const app = express()
const port = 3000
require('dotenv').config();
const mongoose = require('mongoose');
const Mydata = require('../models/myschema');
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var methodOverride = require('method-override')
app.use(methodOverride('_method'))


mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });
 })
 .catch((err) => {
   console.log(err);
 });


app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  Mydata.findById(id).then((data) => {
    if (!data) {
      return res.status(404).send('Data not found');
    }
    Mydata.find().then((arr) => {
      res.render('home', {
        title: 'Edit page',
        arr,
        editData: data,
        message: undefined
      });
    });
  }).catch((err) => {
    console.error('Error fetching data for edit:', err);
    res.status(500).send('Error fetching data for edit');
  });
});

app.put('/edit/:id', (req, res) => {
  const id = req.params.id;
  Mydata.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then(() => {
      res.redirect('/?message=Data updated successfully');
    })
    .catch((err) => {
      console.error('Error updating data:', err);
      res.status(500).send('Error updating data');
    });
});

app.get('/', (req, res) => {
  const message = req.query.message;
  Mydata.find().then((data) => {
    res.render('home', { title: 'Home page', arr: data, message });
  })
  .catch((err) => {
    console.error('Error fetching data:', err);
  });
});

app.post('/', (req, res) => {
  const myData = new Mydata(req.body);
  myData.save().then(() => {
    res.redirect('/?message=Data saved successfully');
  }).catch((err) => {
    console.error('Error saving data:', err);
    res.status(500).send('Error saving data');
  });
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  Mydata.findByIdAndDelete(id).then(() => {
    res.redirect('/?message=Data deleted successfully');
  })
  .catch((err) => {
    console.error('Error deleting data:', err);
    res.status(500).send('Error deleting data');
  });
});