import React from 'react'
import '../Styles/home.css'


export default function Home() {
  return(
   <div className='home'>
    <div>
      <img className='photo' src="https://cdn.pixabay.com/photo/2016/05/26/14/29/woman-1417267_960_720.png"  alt="" />
    </div>
    <div>
     <h1 className='brand'>CodeIva</h1>
     <h3 className='statement'>Web Developer in development !!!</h3>
     <h3 className='statement1'>Welcome to my Portfolio Page</h3>
    </div>
   </div>

  )
}