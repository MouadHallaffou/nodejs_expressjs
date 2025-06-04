const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
});

const Mydata = mongoose.model('Mydata', mySchema);
module.exports = Mydata;