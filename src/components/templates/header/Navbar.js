import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MenuItems } from '../../../assets/data/MenuItems';
import './Navbar.css';
import Dropdown from '../../../organisms/Dropdown';
import { MediaItems } from '../../../assets/data/MediaItems';


function Navbar() {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);



    const onMouseEnter1 = () => {
        if (window.innerWidth < 765) {
            setDropdown1(false);
        } else {
            setDropdown1(true);
        }
    };

    const onMouseLeave1 = () => {
        if (window.innerWidth < 765) {
            setDropdown1(false);
        } else {
            setDropdown1(false);
        }
    } 

    const onMouseEnter2 = () => {
        if (window.innerWidth < 765) {
            setDropdown2(false);
        } else {
            setDropdown2(true);
        }
    };

    const onMouseLeave2 = () => {
        if (window.innerWidth < 765) {
            setDropdown2(false);
        } else {
            setDropdown2(false);
        }
    } 

    return (
        <>
        <nav className="navbar">
            <div className='navbar-wrapper'>
                <div className="navbar-container">
                    <ul className='nav-menu'>
                        <li className="nav-item">
                            <NavLink to='/' className='nav-links'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item"
                            onMouseEnter={onMouseEnter1}
                            onMouseLeave={onMouseLeave1}
                        >
                            <NavLink to='/about' className='nav-links'>
                                About Us <i className="fas fa-caret-down"/>
                            </NavLink>
                            {dropdown1 && <Dropdown dataItem={MenuItems} />}
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products' className='nav-links'>
                                Products & Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/partners' className='nav-links'>
                                Partners
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/clients' className='nav-links'>
                                Clients
                            </NavLink>
                        </li>
                        <li className="nav-item" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
                            <NavLink to='/media' className='nav-links'>
                                Media <i className="fas fa-caret-down"></i>
                            </NavLink>
                            {dropdown2 && <Dropdown dataItem={MediaItems}/>}
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact-us' className='nav-links'>
                                Contact Us
                            </NavLink>
                        </li>
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
