import React from 'react'
import './card.style.css'


const Card = ({monster}) => {
  return (
    <div className='card-container'>
        <img alt='robots' 
        src={`https://robohash.org/${monster.id}?set=set1&size=160x160`}/>
         <h2>{monster.name}</h2>
         <p>{monster.email}</p>
    </div>
  )
}

export default Card