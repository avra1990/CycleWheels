import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/NavbarStyles.module.css';


const Navbar = () => {
    return (
        <header className='header-main'>
            <nav className='navbar navbar-brand-bg navbar-light bg-light'>
                <h3>Cycle Wheels</h3>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/tours'>Tours</NavLink>
                <NavLink to='/teams'>Teams</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contract'>Contract</NavLink>
            </nav>
        </header>
    )
}

export default Navbar;