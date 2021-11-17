
const mongoose=require('mongoose');

const userSchema=mongoose.Schema({

    _id: mongoose.Types.ObjectId,

    num:String,

    name:String,

    email:String,

   
    address:String

})



module.exports=mongoose.model('tony',userSchema);