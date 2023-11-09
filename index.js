const express=require('express');

// const auth=require('./server')
const app=express();
const connect=require('./config/server')
// const user=require('./models/user')
const routes=require('./routes/route')
const {sequelize,dbconnect}=require('./config/server')

// const connect_db=require('./config/config')

// dataabse connection
dbconnect

sequelize.sync() 

app.use('/api/v1',routes)
app.use(express.json())
PORT=3000

app.listen(PORT,()=>{
    console.log(`server  started at ${PORT}`)
})

