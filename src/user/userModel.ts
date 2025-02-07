import mongoose from "mongoose";
import { User } from "./userTypes";

const userSchema = new mongoose.Schema({
    name : {type : String , required : true , unique : true},
    email : {type : String , required : true , unique : true},
    password : {type : String , required : true},
    totalFood: { type: Number, default: 0 },
    totalTransport: { type: Number, default: 0 },
    totalUtilities: { type: Number, default: 0 },
    totalEntertainment: { type: Number, default: 0 },
    totalShopping: { type: Number, default: 0 },
    totalOthers:{type : Number , default : 0}
   
},{timestamps : true}) 

export default mongoose.model<User>('user' , userSchema)