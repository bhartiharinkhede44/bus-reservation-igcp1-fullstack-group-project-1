import { useEffect, useState } from 'react';
import './Blog.css';
import Navbar from "./../../components/Navbar/Navbar.js"
import axios from "axios";

function Blog() {

    const [blogs, setBlogs] = useState([])


    const getBlog = async () => {
        const respons = await axios.get("/api/v1/blogs")
        setBlogs(respons?.data?.data)
    }


    useEffect(() => {
        getBlog()
    }, [])

    return <>
        <div className='Blog-page' >
            <Navbar />
            <div>
                <div className='fash-page'>

                    <h1 className='title'> Bus Reservation </h1>
                    <span className='quote'>Life is a journey that must be traveled no matter how bad the roads and accommodations.</span>

                </div>
                <div className='blog-container'>
                    {
                        blogs.map((blog, index) => {
                            const { title, location, image, description, rating, } = blog

                            return (
                                <div className='blog-card'>
                                    <img src={image} alt='place' className='blog-image' />
                                    <div className='blog-info'>
                                        <span className='rating'> {rating} ⭐</span>
                                        <p className='blog-title'>{title}</p>
                                        <p className='blog-description'>{description}</p>
                                        <p className='location'>{location} 📍</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>


        </div>
    </>
}
export default Blog;