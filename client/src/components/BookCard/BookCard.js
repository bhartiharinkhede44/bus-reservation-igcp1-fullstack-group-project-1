import React, { useEffect, useState } from 'react'
import './BookCard.css'
import { Link } from 'react-router-dom'

const BookCard = ({ _id, name, price, Image}) => {
const [user, setUser] = useState();
const loadUser = ()=>{
  setUser(JSON.parse(localStorage.getItem('user' || "{}")))
}
 useEffect(()=>{
  loadUser();
 },[])
  return (
        
    <div className="book-flex">

      <div className='book-card'>

        <img src={Image} alt={name} className='book-img' />
        {/* <h2 className='book-name'>{name}</h2> */}
        <p className='book-price'> ₹ {price} /-</p>

        {
          user ?  <Link className='button buy-now-btn '

          onClick={() => {
            window.location.href = `/booknow/${_id}`
          }}
        >Book now</Link>       
        : <Link className='button buy-now-btn '

        onClick={() => {
          alert ("Yo are not loged in..?")
          window.location.href = `/login`
        }}
      >Book Now</Link>
        }

      </div>
    </div>
  )
}
export default BookCard