const mongoose = require("mongoose")
const dotenv = require('dotenv')
const users = require('./Data/Users')
const products = require('./Data/products')
const User = require('./models/userModel')
const Product = require('./models/productModel')
const Order = require('./models/orderModel')

dotenv.config();

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


const importData =async ()=>{
    try {
       await Order.deleteMany() 
       await Product.deleteMany() 
       await User.deleteMany() 
       const createUser = await User.insertMany(users);
       const adminUser = createUser[0]._id
       const sampleData = products.map(p =>{
        return{...p,user:adminUser}
       })
       await Product.insertMany(sampleData)
       console.log('data Imported')
       process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)

    }
}
const dataDestory = async()=>{
    try {
        await Order.deleteMany() 
       await Product.deleteMany() 
       await User.deleteMany() 
       
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
if(process.argv[2] === '-d'){
    dataDestory();
}
else{
    importData();
}