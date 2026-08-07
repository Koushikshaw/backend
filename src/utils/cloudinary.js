import {v2 as cloudinary} from "cloudinary"
import dotenv from "dotenv"
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath)return null
        //upload file on cloudinary
        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure: true
        })



        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type : "auto",
        })
        //file uploaded successfully on cloudinary
        console.log("File uploaded Successfully on Cloudinary",response.url);
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got successful
        return response
    }catch(err){
        // console.log("CLOUDINARY_API_KEY : ",process.env.CLOUDINARY_API_KEY);
        // console.log("CLOUDINARY_API_SECRET : ",process.env.CLOUDINARY_API_SECRET);
        // console.log("CLOUDINARY_CLOUD_NAME : ",process.env.CLOUDINARY_CLOUD_NAME);
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
        return null
    }
    
}

export {uploadOnCloudinary}