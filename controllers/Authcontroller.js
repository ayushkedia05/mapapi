// const req = require('express/lib/request');
const User = require('../models/usermodel.js');
const jwt = require('jsonwebtoken');

const Apperror = require('../appError.js');

exports.signup = async (req, res, next) => {
  try {
    // console.log(req.file);
    // console.log(req.body);
  const { email} = req.body;

    let newTour;
    newTour = await User.findOne({ "email": req.body.email });

    console.log(newTour);
     
    if(!newTour)
    {
       console.log("kadbja")
        newTour = await User.create(req.body);
    }
    else
    {
      newTour=await User.updateOne(req.body);
    }
    

    res.status(201).json({
      status: 'success',
      data: {
        newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
  
    res.status(200).json({
      status: 'success',
      user
    });
  } catch (err) {
    status: 'fail',
     err;
  }
};
