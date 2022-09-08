const express=require('express')
// import { readdetail } from '../controllers/readcontroller'
const {readdetail,getdetails} =require('../controllers/readcontroller')
const router=express.Router()

router.post('/store',readdetail)
router.get('/details',getdetails)
module.exports = router;
