// import { defaultMaxListeners } from "form-data";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    require:true,
    default:true
   },
   password:{
    type:String,
    required:true
   },
   creditBalance:{
    type:Number,
    default:5
   }
})

 const UserModel  = mongoose.model("User",userSchema)
 export default UserModel;