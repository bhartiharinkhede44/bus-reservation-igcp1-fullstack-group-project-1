import { Schema , model } from "mongoose";

const BlogSchema = new Schema({
    title :{
        type : String
    },
    location :{
        type : String,
        require : true
    },
    image :{
        type : String ,
        require : true,
    },
    description :{
        type : String ,
        require : true ,
    },
    rating :{
        type : Number,
    }
},{timestamps : true})

const Blog = model("Blog" , BlogSchema)

export default Blog