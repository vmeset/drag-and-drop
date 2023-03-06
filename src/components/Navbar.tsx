import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to={'/easy'}>Easy level</Link>
      <hr />
      <Link to={'/medium'}>Medium level</Link>
    </nav>
  )
}

export default Navbar