const express=require('express');

const router=express.Router();

const home=require('../controller/Auth');

router.get('/',home.home);
router.use('/user',require('./auth'))


module.exports=router;