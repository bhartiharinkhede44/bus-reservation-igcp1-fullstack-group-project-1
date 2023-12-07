import { useEffect, useState } from 'react';
import './Blog.css';
import Navbar from "./../../components/Navbar/Navbar.js"
import axios from "axios" ;

function Blog() {

    const [blogs , setBlogs] = useState([])


const getBlog = async ()=>{
    const respons = await axios.get("/api/v1/blogs")
    setBlogs(respons?.data?.data)
}


useEffect(()=>{
    getBlog()
},[])

    return<>
    <div className='Blog-page' >
        <Navbar />
        <div>
            <div className='fash-page'>
                <h1 className='title'> Bus Reservation </h1>
                <span className='quote'>Life is a journey that must be traveled no matter how bad the roads and accommodations.</span>

            </div>
            <div>

            </div>
        </div>

    
    </div>
    </>
}
export default Blog;