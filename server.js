const app = require('./index');
require('dotenv').config
const PORT = process.env.PORT;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://vishalkumarIshdev:t5uvO8vRXsL8GpX9@cluster0.tg44sis.mongodb.net/gallary?retryWrites=true&w=majority',{family:4},(err)=>{
    if(!err){
        console.log('Database connected successfully');
        // console.log('NODE ENV ' ,process.env.NODE_ENV);
        app.listen(PORT || 3312,()=>{
            console.log('App get Started at port : ',PORT || 3312);
        })
    }
})