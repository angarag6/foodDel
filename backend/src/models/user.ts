import mongoose from "mongoose";
 
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        length: {
            min: 2,
        }, 
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    phone_number: {
        type: Number,
        length: {
            minlenght: 8,
            maxlenght: 8,
        }
    },
    avatar_img: Buffer,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: "user"
    }
})
const userModel = mongoose.model('food delivery user', UserSchema)
export { userModel }