import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String], 
    selectedFile: String, //create image to string using base64
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        defalut: new Date()
    }
});

//turn schema into model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;