// const req = require("express/lib/request");

const fs=require('fs');
const mongoose =require('mongoose');
const dotenv=require('dotenv');
const Tour=require('./../../models/tourmodel.js')
dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,

    useUnifiedTopology: true
  })
  .then(con => {
    // console.log(con.connection);
    console.log('DB connection successful');
  });
// rea file

const tourss=JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`,'utf-8'));

// import 
console.log(tourss);
const importdata=async()=>{
    try{
        await Tour.create(tourss);
        console.log('data sucessfully loaded')
    }
    catch(err){
   console.log(err);
    }
    
}


const deletedata= async()=>{
    try{
        await Tour.deleteMany();
        console.log('deleted successs')
    }
    catch(err){
        console.log(err);
    }
}


console.log(process.argv);

if(process.argv[2]==='--import')
{
    importdata()
}else if(process.argv[2]==='--delete')
{
    deletedata();
}