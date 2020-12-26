import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink className='nav-link active' aria-current='page' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' to='/products'>
              Products
            </NavLink>
            <NavLink className='nav-link' to='/posts/2018/06'>
              Posts
            </NavLink>
            <NavLink className='nav-link' to='/admin'>
              Dashboard
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
