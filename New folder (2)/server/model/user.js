const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = mongoose.Schema(
    {
        
        user_name:{
            type: String,
            require: true,
        },
        email:{
            type: String,
            require: true,
        },
        password:{
            type: String,
            require: true
        },
        photo: String,
        following:[{type: Schema.ObjectId, ref:"User"}],
        followers:[{type: Schema.ObjectId, ref:"User"}]
    },
    {
        timestamps:true,
    }
)

const User = mongoose.model("User",userSchema);
module.exports = User;