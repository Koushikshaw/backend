import mongoose from 'mongoose';
import {User} from './user.model.js';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new mongoose.Schema(
    {
        videoFile : {
            type : String, //cloudinary URL
            requried : true,   
        },
        thumbnail : {
            type : String, //cloudinary URL
            requried : true,
        },
        title : {
            type : String,
            requried : true,
        },
        description : {
            type : String, 
            requried : true,
        },
        duration : {
            type : Number,

        },
        views : {
            type : Number,
            default : 0,
        },
        isPublished : {
            type : Boolean,
        },
        ownner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User',
        }
    }
,{timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate);

export const Video =  mongoose.model('Video',videoSchema);