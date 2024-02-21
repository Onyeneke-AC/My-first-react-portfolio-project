import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import NavbarIterate from '../../../organisms/NavbarIterate';


function Navbar() {
    
    return (
        <>
        <nav className="navbar">
            <div className='navbar-wrapper'>
                <div className="navbar-container">
                    <ul className='nav-menu'>
                        <NavbarIterate />
                    </ul>
                    <div className="lang">
                        <Link to='/Modal'>
                            <img src="images/icons/english.png" alt="British flag" className='flag'/>
                            English <img src="images/icons/Link → ▼.png" alt="down" className='lang-down' />
                        </Link>
                    </div>
                
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;
