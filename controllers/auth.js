
// const User=require('../models/user')

const {User } = require('../models/user');


// create entry
exports.signup=async (req,res)=>{
    try{
        
        // const {user_name,email}=req.body
         await User.create({
            user_name:"abhy",

            email:"12@"
            
           
            
        })
        
        res.send("account created...")
        
        console.log("successfully added")

    }catch(error){
        console.log(`error occued ${error}`,)
         
        
    }
}
exports.home=(req,res)=>{
    res.send("Welcome")
}