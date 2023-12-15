import { Schema , model } from "mongoose";

const SearchSchema = new Schema({     
    city :{
        type : String,
        required : true
    },
    cities :{
        type : String,
        required : true
    }, 
    pickupdate:{
        type : Number ,
        required : true,
    }
},{timestamps : true})

const Search = model("Search" , SearchSchema)

export default Search;