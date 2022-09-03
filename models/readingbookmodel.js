const mongoose = require('mongoose');
const validator = require('validator');
var findOrCreate = require('mongoose-findorcreate')
const bcrypt = require('bcryptjs');
const readingbookSchema = new mongoose.Schema({
  email:{
    type:String
  },
  book: {
    type: String
  },
  photo:{
    type:String,
    default:'Poi'
  },

  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      default: 'Point',
      enum: ['Point'], // 'location.type' must be 'Point'
    },
    coordinates: {
      type: [Number],
    }
  }
});



const Reading = mongoose.model('Reading', readingbookSchema);
module.exports = Reading;
