import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './../../components/Navbar/Navbar'
import './BookNow.css'
import BookCard from "./../../components/BookCard/BookCard"

const BookNow = () => {
    const [books, setBook] = useState([]);
    const [search, setSearch] = useState('');

    const loadBook = async () => {
        const response = await axios.get(`/api/search`);
        setBook(response?.data?.data)
    }

    useEffect(() => {
        loadBook()
    }, [search])
    
    return (
        <div>
            <Navbar />
            <input type="text" value={search} className='search-btn' placeholder='search' onChange={(e) => {
                setSearch(e.target.value)
            }} />

            <div >
                {
                    books?.map((book, i) => {
                        const { _id, name, price, image } = book
                        return (
                            <div>
                                <BookCard
                                    key={i}
                                    name={name}
                                    price={price}
                                    image={image}
                                    _id={_id}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )}
export default BookNow;       

