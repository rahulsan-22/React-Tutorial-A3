//!Link
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>
//   )
// }
// export default Navbar

//!NavLink
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav>
       <NavLink to="/">Home</NavLink>
       <NavLink to="/about">About</NavLink>
       <NavLink to="/contact">Contact</NavLink>
     </nav>
  )
}

export default Navbar