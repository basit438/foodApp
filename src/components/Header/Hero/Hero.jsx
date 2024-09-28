import React from 'react'
import './Hero.css'
import foodimg from '../../../assets/foodBg.avif'
import hotels from '../../../assets/hotelsimg.avif'

function Hero() {
  return (
   <>
    <section id="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-heading">Find the best food</h1>
          <p className="hero-para">Discover the best food in town with our food services.</p>

         <div className="hero-btn-container">
         <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700">
            Search Restraunts
          </button>
          <button className=' bg-white text-black font-bold py-2 px-4 rounded-lg hover:bg-indigo-100 '>Know more</button>
         </div>
        </div>
      </div>
    </section>

    <section className='hotels-section'>
      
        <div className="hotels-img">
          <img className='hotel-image' src={hotels} alt="hotels" />
        </div>
        <div className="hotels-text"> 
          <h1 className="hotels-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque!</h1>
          <p className="hotels-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio qui nobis fugit eum, quas commodi earum aperiam explicabo? Tempore corrupti perferendis nisi similique est nihil!</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 w-40">Get Started</button>
        </div>
     
    </section>
   </>
  )
}

export default Hero
