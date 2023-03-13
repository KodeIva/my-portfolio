import React from 'react'
import  '../Styles/contact.css'

export default function Contact() {
 return (<>
  <h1>Get in Touch</h1>
   <section className="contact">
    
    <form action="https://formspree.io/f/mvolnddd" method="POST">
       <input type="text" name="Name" placeholder="Full Name" required/>
       <input type="email" name="Email" placeholder="Email" required/>
       <input type="number" name="Number" placeholder="Contact Number" required/>
       <input type="text" name="Subject" placeholder="Subject" required/>
       <textarea name="Message" id="" cols="30" rows="7" placeholder="Your Message..." required></textarea>
       <button className="btn-send" type="submit">Send</button>
    </form>

  <div className="socialLinks">
       <ul className="icons">
        <li>
          <a href="https://github.com/KodeIva" aria-hidden="true" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-github" ></i>
         </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" aria-hidden="true" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook" ></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/iva-karadjova-4915572b/" aria-hidden="true"  target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" ></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/KaradjovaIva" aria-hidden="true" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" ></i>
          </a>
        </li>
        <li><a href="https://codepen.io/Iva-19" aria-hidden="true" rel="noopener noreferrer" target="_blank">
         <i  className="fab fa-codepen" ></i>
        </a></li>
       </ul>
     </div> 
  </section> 
</>    
 )
} 