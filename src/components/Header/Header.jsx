import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
      <h1 className="logo">FoodApp</h1>

      <ul className="nav-list">
        <li className="nav-list"><a href="">Home</a></li>
        <li className="nav-list"><a href="">Quote</a></li>
        <li className="nav-list"><a href="">Restraunts</a></li>
        <li className="nav-list"><a href="">Food</a></li>
        <li className="nav-list"><a href="">Contact</a></li>

      </ul>

      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 mx-7" >
  Get Started
</button>

    </div>
  )
}

export default Header
