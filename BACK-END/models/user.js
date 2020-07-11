const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    phonenumber: {type:String,required:true},
    password: {type:String,required:true,minlength:8}
});
module.exports=mongoose.model('User',userSchema);