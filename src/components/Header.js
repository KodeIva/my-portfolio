import { Link } from 'react-router-dom'
import '../Styles/header.css'

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
       <ul className="menuNav">
       <li className="link"> <Link to='/my-portfolio/'>Home</Link></li>
       <li className="link"> <Link to='/my-portfolio/about'> About</Link></li>
       <li className="link"> <Link to="/my-portfolio/project"> Project </Link> </li>
       <li className="link"> <Link to="/my-portfolio/contact">Contacts</Link></li>
     </ul>
     </div>
     <div className="bars">
      <button className="fas fa-bars"></button>
     </div>
   </div>
  </nav>

  )
}