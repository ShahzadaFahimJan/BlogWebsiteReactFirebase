import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <div>
      <Link to="/" >Home</Link>
      <Link to="/createpost" >createpost</Link>
      <Link to="/login" >login</Link>
     </div>
    </div>
  )
}
