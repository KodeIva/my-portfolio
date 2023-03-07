import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return(
   <nav className="nav">
    <div className="logo">
      <div className="logo-mini">
       <span>Code[Iva]</span>
      </div>
    </div>
    <div className="menu">
     <div className="menuLinks">
       <ul>
       <li> <Link to='/my-portfolio/'>Home</Link></li>
       <li> <Link to='/my-portfolio/about'> About</Link></li>
       <li> <Link to="/my-portfolio/project"> Project </Link> </li>
       <li> <Link to="/my-portfolio/projectGallery">Project Gallery</Link></li>
       <li> <Link to="/my-portfolio/contact">Contacts</Link></li>
     </ul>
     </div>
     <div className="socialLinks">
       <ul className="icons">
        <li><a href="" className="fab fa-facebook"></a></li>
        <li><a href="" className="fab fa-linkedin"></a></li>
        <li><a href="" className="fab fa-twitter"></a></li>
        <li><a href="" className="fab fa-codepen"></a></li>
        <li><a href="" className="fab fa-github"></a></li>
       </ul>
     </div>
     <div className="bars">
      <button className="fas fa-bars"></button>
     </div>
    
   </div>
  </nav>

  )
}