const express=require('express')
const routes=express.Router()
const {login,signup,home,update,del}=require('../controllers/auth')

routes.post('/signup',signup)
routes.get('/home',home)
// routes.put('/update',update)
// routes.delete('/delete',del)
module.exports=routes