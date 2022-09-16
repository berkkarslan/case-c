import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Evam
        </a>

        <div>
          <ul className='navbar-nav mr-auto'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
