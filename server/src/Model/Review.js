import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
    title: {
        type: String,
        required : true
    },
    name: {
        type: String,
        required : true
    },
    description: {
        type: String,
    },
    profession: {
        type: String,
        required : true
    },
    emoji: {
        type: String,
        required : true
    }
},
{
    timestamps:true
}
)

const Review = model("Review", reviewSchema);
export default Review;