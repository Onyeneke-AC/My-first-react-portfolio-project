import React from 'react'
import { SidebarData } from '../assets/data/SidebarData';
import NavSubMenu from './NavSubMenu';
import '../components/templates/header/Navbar.css';

function NavbarIterate() {
  return (
    SidebarData.map((item, index) => {
        return(
            <li className='nav-item'>
            <NavSubMenu item = {item} key={index} />
            </li>
        )
    })
  )
}

export default NavbarIterate
