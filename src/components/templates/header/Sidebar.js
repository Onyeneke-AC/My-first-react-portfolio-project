import React, { useState } from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from '../../../assets/data/SidebarData';
import SubMenu from '../../../organisms/SubMenu';
// import { IconContext } from 'react-icons/lib';
import "./Sidebar.css";

// const SidebarNav = styled.nav`
//   background: #15171c;
//   width: 250px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
//   transition: 350ms;
//   z-index: 10;
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
// `;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <div className='side-nav'>
          <div className='side-wrapper'>
          <div className='side-container'>
          <div className='side-icon' to='#' onClick={showSidebar}>
            <i className='fas fa-bars'/>MENU
          </div>
          <div className="lang">
            <Link to='/Modal'>
              <img src="images/icons/english.png" alt="flag" className='flag'/>
              English <img src="images/icons/Link → ▼.png" alt="down" className='lang-down' />
            </Link>
          </div>
          </div>
          </div>
        </div>
        {/* <SidebarNav sidebar={sidebar}> */}
        <div className={sidebar? 'sidebar-nav active' : 'sidebar-nav'} >
          <div className='sidebar-wrap' >
            <div className='close-icon' to='#' onClick={showSidebar}>
              <i className='fas fa-times'/>
              CLOSE
            </div>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index}/>;
            })}
          </div>
        </div>
        {/* </SidebarNav> */}
    </>
  );
};

export default Sidebar;