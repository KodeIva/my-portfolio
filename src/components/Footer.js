import React from 'react'
import '../Styles/footer.css'

export default function Footer() {
 let date = new Date()
 let currentYear = date.getFullYear()
 console.log(currentYear);

  return(<div>
   <h1 className='currentYear'> Copyright @ {currentYear} : CodeIva</h1>
  </div>
 

  )
}