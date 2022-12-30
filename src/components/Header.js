import React from 'react'
import Globe from '../assets/globe.png'

function Header() {
  return (
    <div>
      <header>
        <img src={Globe} className='globe-img' alt='Globe'></img>
        <p>my travel journal.</p>
      </header>
    </div>
  )
}

export default Header
