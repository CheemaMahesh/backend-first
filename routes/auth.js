const express=require('express');

const router=express.Router();

const home=require('../controller/Auth');

router.post('/signup',home.signUp);
router.get('/login',home.logIn);



module.exports=router;