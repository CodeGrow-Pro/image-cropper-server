const express  = require('express');
const bodyParser = require('body-parser');
const routers = require('./routes/api/index')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.get('/',(req,res)=>{
    return res.status(200).send({
        message : "Welcome to your Gallary!"
    })
})
app.use('/gallary',routers)
module.exports = app;