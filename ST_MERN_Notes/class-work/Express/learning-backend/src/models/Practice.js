import mongoose from "mongoose";
import { required } from "zod/mini";

const practiceSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    }, 
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,     
        trim:true
    }
})