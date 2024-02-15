import { MenuItems } from '../assets/data/MenuItems';
import { MediaItems } from '../assets/data/MediaItems';
import React from 'react';
import { useState } from 'react';

export const Sidebar = () => {
    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false);

}
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

export const SidebarData = [
    {
        title: 'Home',
        path: '/',   
    },
    {
        title: 'About Us',
        path: null,
        iconClosed: <i className="fas fa-caret-down"/>,
        iconOpened: <i className="fas fa-caret-up"/>,
        onmouseenter: 'onMouseEnter1',
        onmouseleave: onMouseLeave1,
        dropdown: 'dropdown1',
        dropItem: MenuItems,
        subNav: [
            {
                title: 'Who We Are',
                path: '/who',
            },
            {
                title: 'Our Team',
                path: '/team',
            }, 
            {
                title: 'Awards',
                path: '/awards',
            },
            {
                title: 'Careers',
                path: '/careers',
            },
        ]
    },
    {
        title: 'Products & Services',
        path: '/products',   
    },
    {
        title: 'Partners',
        path: '/partners',   
    },
    {
        title: 'Clients',
        path: '/clients',   
    },
    {
        title: 'Media',
        path: null,
        iconClosed: <i className="fas fa-caret-down"/>,
        iconOpened: <i className="fas fa-caret-up"/>,
        onmouseenter: 'onMouseEnter2',
        onmouseleave: 'onMouseLeave2',
        dropdown: 'dropdown2',
        dropItem: 'MediaItems',
        subNav: [
            {
                title: 'News',
                path: '/news',
            },
            {
                title: 'Blogs',
                path: '/blogs',
            }
        ]   
    },
    {
        title: 'Contact Us',
        path: '/contact-us',   
    }
]