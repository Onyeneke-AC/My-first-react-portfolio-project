import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from '../../../organisms/Dropdown';
import { MenuItems } from '../assets/data/MenuItems';
import { MediaItems } from '../assets/data/MediaItems';

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
    !item.path?
    <>
                            <div to={item.path} className='nav-links' onMouseEnter={onMouseEnter1}
                            onMouseLeave={onMouseLeave1} >
                                About Us <i className="fas fa-caret-down"/>
                            </div>
                            {dropdown1 && <Dropdown dataItem={MenuItems} />}
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
