import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.scss'

const Sidebar = ({isSidebar,setIsSidebar}) => {

    return (
        <div className={isSidebar?'sidebar active':'sidebar'}>
            <div className="sidebar_close_icon"><i class="fas fa-times" onClick={() => setIsSidebar(false)}></i></div>
            <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Sidebar
