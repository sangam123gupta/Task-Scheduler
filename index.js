const express=require('express');

const app=express();

const mongoose=require('mongoose');

const bodyParser=require('body-parser');

const jsonParser=bodyParser.json();

const user=require('./tony');

const cors=require('cors');

mongoose.connect('mongodb+srv://Ironman:OrgoSxAUlgqz0o2H@cluster0.7n7uo.mongodb.net/Blog?retryWrites=true&w=majority',{

useNewUrlParser:true,
useUnifiedTopology:true

}).then((result)=>{
    console.log("mongodb is connected");
})
.catch((err)=>{
    console.log("mongodb is not connected");
})


app.use(express.json());


// CORS policy

app.use(cors());



app.post('/event',jsonParser,function(req,res){
  
const a=req.body.num
setTimeout(()=>{
    console.log("hello sangam")

    const data=new user({
    
        _id: mongoose.Types.ObjectId(),

        num:req.body.num,
    
        name:req.body.name,
    
        email:req.body.email,
    
        address:req.body.address,
    
        
        })
    
        data.save().then((result)=>{
    
            console.log("data is saved")
        })
        .catch((err)=>{
            console.log("data is not saved")
        })
           
},a*1000)
   

    
    
   
})



/////   Get

app.get('/eventing/:id',function(req,res){
    
    user.find({_id:req.params.id}).then((data)=>{

        //res.json(data)
    })
})



////  All data getting

app.get('/event',function(req,res){
    
    user.find().then((data)=>{

        res.json(data)
         //   console.log(data)
        
    })
})



//////  Sender



app.delete('/event/:id',function(req,res){

    const time=req.body.time;

    console.log("time is delete",time)
    user.deleteOne({_id:req.params.id}).
    then((result)=>{

        res.status(201).json(result)
    }) 
    .catch((err)=>{
        console.warn(err)
    })

})

///////


       



////////////                 update         //////

app.put('/event/:id',jsonParser,function(req,res){
    user.updateOne({_id:req.params.id},{$set:{

        
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        
    }}).then((result)=>{
        res.status(200).json(result)
    })

    .catch((err)=>{console.warn(err)})
})


//  Create ticket api
/*
app.post('/ticket', jsonParser ,function(req,res){


    

    let data=new user({

        _id: mongoose.Types.ObjectId(),

        name:req.body.name,
    
        email:req.body.email,
    
        address:req.body.address,

    })

    data.save().then((resp)=>{
        res.json("data is now saved");
        console.log("data is now saved");
    })

    .catch((err)=>{

        console.log("data is not saved",err);
    })
})*/


//  ticket put api

app.put('/ticket/:id',jsonParser,function(req,res){

    const time=req.body.num;
    setTimeout(()=>{



        user.updateOne({_id:req.params.id},{$set:{
            name:req.body.name,
            email:req.body.email,
            address:req.body.address,
        }}).then((result)=>{
            res.status(200).json(result)
            console.log("hello sangam")
        })
    
        .catch((err)=>{console.warn(err)})


    },time*1000)
 
})


app.listen(3005)