// require("dotenv").config()
import dotenv from "dotenv"
import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js"

dotenv.config({
    path : './.env'
})

connectDB() 
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
})
.catch((err)=>{
    console.log("MONGODB connection Failed : ",err);
})








/*
import express from "express"
const app = express()

;(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(err)=>{
            console.log("ERROR : ",err);
            throw err
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }catch(err){
        console.error("ERROR : ",err)
        throw err
    }
})()

*/