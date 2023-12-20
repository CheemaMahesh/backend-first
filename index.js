const express=require('express');
const PORT=8000;
const cors=require('cors')

const app=express();



app.use(express.json({ limit: "30mb", extended: true }));

app.use(express.urlencoded({
    extended:true
}));

app.use(cors());

app.use('/',require('./routes')); 


const CONNECT_URL='mongodb+srv://MaheshCK:MaHeSh7893@stack-overflow-clone.itsy6as.mongodb.net/';

const mongoose=require('mongoose');
mongoose.set('strictQuery',false);

mongoose.connect(CONNECT_URL)
.then(
    ()=> app.listen(PORT,()=>{
        console.log("mongo is connected, server is up and running on port",PORT)
    })
).catch((err)=>{
    return console.log(err)
})


