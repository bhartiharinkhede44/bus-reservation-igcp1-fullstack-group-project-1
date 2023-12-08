import mongoose, { model,Schema } from "mongoose";

const bookSchema = new Schema({
   

    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    productImg: {
        type: String, 
    }

}, { timestamps: true })

const Book = mongoose.model('Book', bookSchema)

export default Book