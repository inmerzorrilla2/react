import React from 'react'
import './style/card.css'

 

const Card = ({color, text}) => {

    const borderColor = {
    borderColor: color,
   }

    const textColor = {
    color: color,
   }

  
  return (
    <article style={borderColor} className='card'>
        <h2 className='card_header'>Header</h2>
        <h3 className='card_title'>{text} card title</h3>
        <p style={textColor} className='card_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam totam maiores eligendi.</p>
    </article>
  )
}

export default Card
