import React from 'react'
import './ReviewTask.css'

const ReviewTask=({id,title,description, name, profession, emoji, setTaskEditable})=>{
  return (
    <> 

    <div className='review-container-text'>
                
                <div review-container-text></div>
       <h5 className='title-review '>Title: {title}</h5>
       <p className='title-review'>Description: {description}</p>
       <h5 className='title-review'>Name: {name}</h5>
       <p className='title-review'>Proffession: {profession}</p>
       <p className='title-review'>Emoji: {emoji}</p> 
    </div>


    </>
  )
}
export default ReviewTask