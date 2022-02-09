import React from 'react'
import './card-list.style.css'
import Card from './card/card'

const Cardlist = ({monsters}) => {
  return (
    <div className='card-list'>
        {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
       ))}
    </div>
  )
}

export default Cardlist