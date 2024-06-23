import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const institutionContainerSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        logo:{
            type:String,
            required:true,
        },
        description:{
            type:String,
        },
        password: {
            type: String,
            required: [true,'Password is required']
        },
        refreshToken: {
            type: String
        }
        
    },
    {
        timestamps:true
    }
)

export const institutionContainer = mongoose.model("institutionContainer",institutionContainerSchema);