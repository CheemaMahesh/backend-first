const User=require('../model/User');

module.exports.home=async (req,res)=>{
    try{

        return res.status(200).json({message:"Welcome",mahi:1010101})

    }catch(err){
        return res.status(401).json({message:`error in home controller ${err}`})
    }
}

module.exports.signUp=async(req,res)=>{

    try{
        const exiUser=await User.findOne({email:req.body.email});

        if(exiUser){
            return res.status(404).json({message:"user already exists"});
        }else{

            const newUser=await User.create({
                email:req.body.email,
                password:req.body.password
            });

            console.log(req.body.email)

            return res.status(200).json({
                message:"SignUp successfull",
                userDetails:newUser
            })

        }

    }catch(err){
        console.log(err)
        return res.status(401).json({message:`error in SignUp controller ${err}`})
    }
}


module.exports.logIn=async (req,res)=>{
    try{

        const exiUser=await User.findOne({email:req.body.email});
        if(exiUser && exiUser.password=== req.body.password){

            return res.status(200).json({message:"Log in successful"})
            
        }else{
            return res.status(401).json({message:"Email or Password is incorrect"})
        }


    }catch(err){
        return res.status(401).json({message:`error in Login controller ${err}`})
    }
}