const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const postSchema = mongoose.Schema(
    {
        content:{
            type:{},
            require:true
        },
        postedBy:{
            type:ObjectId,
            ref:"User" 
        },
        image:{
            url: String,
            public_id:String
        },
        likes:[{type:ObjectId, ref:"User"}],
        comments:[{
            text: String,
            created: {type:Date, default:Date.now},
            postedBy:{
                type:ObjectId,
                ref:"User" 
            }
        }]
    },
    {
        timestamps:true,
    }
)

const Post = mongoose.model("Posts",postSchema);
module.exports = Post;