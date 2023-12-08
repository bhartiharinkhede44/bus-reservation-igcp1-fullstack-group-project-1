import { Schema , model } from "mongoose";

const SearchSchema = new Schema({
    to :{
        type : String
    },
    from :{
        type : String,
        require : true
    },
    date :{
        type : Number ,
        require : true,
    }
},{timestamps : true})

const Search = model("Search" , SearchSchema)

export default Search;