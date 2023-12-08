import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './BookNow.css'

import { useParams } from 'react-router-dom'

const Buy = () => {
    // const { _id } = useParams();

    const [productDetails, setproductDetails] = useState({})

    let [quantity, SetQuantity] = useState(1)

    const loadProductDetails = async () => {

        const response = await axios.get('/api/book')
        alert(response?.data?.message)

        setproductDetails(response?.data?.data)
    }

    useEffect(() => {
        loadProductDetails()

    })
    const increQuantity = () => {
        SetQuantity(++quantity)
    }

    const decrQuantity = () => {
        if (quantity === 1) return
        SetQuantity(--quantity)
    }

    // const orderPlace = async () => {

    //     const userStore = JSON.parse(localStorage.getItem('user') || '{}')

    //     const newOrderUser = {
    //         user: userStore?._id,
    //         product: productDetails._id,
    //         quantity: quantity,
    //     }

    //     const response = await axios.get('/api/book', newOrderUser)

    //     alert(response?.data?.message)

    //     if (response?.data.success) {
    //         window.location.href = "/booknow"
    //     }
    // }
    return (
        <div className='container buyDetails-main-container mt-5'>

            <div className='buy-details-container'>
                <div className='p-3'>
                    <img src={productDetails.productImg} alt={productDetails.name} className='order-product-img' />

                </div>

                <div>
                    <div className='pt-3'>
                        <h2>{productDetails.name}</h2>
                        <h2 className='price' >Price : ₹ {productDetails.price} /-</h2>
                        {/* <p>{productDetails.description}</p> */}
                        <button type="button"
                            onClick={increQuantity} className='quantitybtn'>+</button>
                        <button className='quantity '>{quantity}</button>
                        <button type="button"
                            onClick={decrQuantity} className='quantitybtn'>-</button><br /><br />
                    </div>
                    <button type="button"
                        onClick={loadProductDetails}
                        className='button order-now-btn mt-4'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Buy;