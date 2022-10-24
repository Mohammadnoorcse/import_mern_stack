const express = require("express");
const products = require("./Data/products")
const {errorHandler} = require("./middleware/errorMiddleware")
const dotenv = require('dotenv');
// const connectDB = require('./config/db')
const mongoose = require('mongoose')


const app = express()
app.use(express.json())

//dotenv config 
dotenv.config();




// connecting to mongodb database


const URL = process.env.MONGO_URL
mongoose.connect(URL,{
    // useCreateIndex:true,
    // useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
},err=>{
    if(err) throw err;
    console.log("Connected to MongoDB");
})



app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Node server</h1>")
})
app.use("/api",require('./routes/productRoute'))
app.use("/api/users",require('./routes/userRoute'))
app.use(errorHandler)


app.listen(process.env.PORT || 8080,()=>{
    console.log("server running on port 8080");
})