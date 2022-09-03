 

const mongoose = require('mongoose');
// const { number } = require('sharp/lib/is');

const validator = require('validator');

const touSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,

      // validate: [validator.isAlpha, 'Tour name must only contain characters']
    },
   
    address: {
      type: String,
      // required: [true, 'A tour must have a difficulty'],
   
    },
    email: {
      type: String,
      required: [true, 'provide an email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'please provide a vaild email']
    },
    phonenumber:{
     type:Number
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
    
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      // required: [true, 'A tour must have a price']
    },
    // priceDiscount: {
    //   type: Number,
   
    // },
    gstin:{
        type:String
    },
    registration: {
      type: String,
      trim: true,
        // required: [true, 'A tour must have a description']
      },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      // required: [true, 'A tour must have a cover image']
    },
    images: [String],
     days:{
       type:Number
     }
  },

);

const Tour = mongoose.model('Tour', touSchema);
module.exports=Tour;