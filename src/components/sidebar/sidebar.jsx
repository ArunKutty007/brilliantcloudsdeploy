import React from 'react'

import './sidebar.scss'

const Sidebar = ({isSidebar,setIsSidebar}) => {

    return (
        <div className={isSidebar?'sidebar active':'sidebar'}>
            <div className="sidebar_close_icon"><i class="fas fa-times" onClick={() => setIsSidebar(false)}></i></div>
            <nav>
            <ul>
              <li>
                <a href="#home" onClick={() => setIsSidebar(false)}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={() => setIsSidebar(false)}>About Us</a>
              </li>
              <li>
                <a href="#services" onClick={() => setIsSidebar(false)}>Services</a>
              </li>
              <li>
                <a href="#process" onClick={() => setIsSidebar(false)}>Process</a>
              </li>
              <li>
                <a href="#portfolio" onClick={() => setIsSidebar(false)}>Portfolio</a>
              </li>
              <li>
                <a href="#contact" onClick={() => setIsSidebar(false)}>Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Sidebar
