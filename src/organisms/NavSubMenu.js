import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItems } from '../assets/data/MenuItems';
import { MediaItems } from '../assets/data/MediaItems';
import '../components/templates/header/Navbar.css';
import Dropdown from './Dropdown';

function NavSubMenu({ item }) {

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
    {
    item.title==='About Us'?
        <>
        <div to={item.path} className='nav-links' onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1} >
            {item.title} <i className="fas fa-caret-down"/>
        </div>
        {dropdown1 && <Dropdown dataItem={MenuItems} />}
        </>
    :

    item.title === 'Media'?
    
    <>
        <div to={item.path} className='nav-links' onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2} >
            {item.title} <i className="fas fa-caret-down"/>
        </div>
        {dropdown2 && <Dropdown dataItem={MediaItems} />}
    </>

    :

    <NavLink to={item.path} className='nav-links'>
        {item.title}
    </NavLink>
    
    }   
    </>
    );
}

export default NavSubMenu
