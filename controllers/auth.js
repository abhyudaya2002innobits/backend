const user_create=require('../migrations/20231108101240-users')


// create entry
exports.signup=async (req,res)=>{
    try{
        
        const {name,email}=req.body()
         await user_create.create({
            
            
            
        })
        res.send("account created...")
        
        console.log("successfully added")

    }catch(error){
        console.log(`error occued ${error}`)
         
        
    }
}
exports.home=(req,res)=>{
    res.send("Welcome")
}


// update entry
exports.update=async (req,res)=>{
    try{
        res.send("Updated...")
        await user_create.update({email:"dhoni@gmail.com"},{
            where:{
                name:"dev",
            }
        })
        console.log("successfully updated ")
    }catch(error){
        res.send("error in updating")
        console.log(`error occured: ${error}`)
    }

}

exports.del=async(req,res)=>{
    try{
        await user_create.destroy({
            where:{
                name:"dev"
            }
        })
        res.send("user deleted")
        console.log("user deleted")
    }catch(error){
        res.send("user can not be deleted")
        console.log(`error occured ${error}`)
    }
}