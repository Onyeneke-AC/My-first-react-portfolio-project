import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Dropdown.css';

function Dropdown({ dataItem = [] }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {dataItem.map((item, index) => (
                <li key={index}>
                    <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default Dropdown;
