import React,{useRef,useEffect} from 'react'
import './home.scss'
import { downarrow} from '../../assets/index'
import {init} from 'ityped';
const Home = () => {
    const textRef=useRef()

    useEffect(() => {
        
         init(textRef.current, { showCursor: true, backDelay:1800,strings: ['ONE','CREATOR','CRM','BOOKS','SUBSCRIPTION','INVENTORY'] });
    }, [])
    return (
        <div className="home" id="home">
            <div className="container">
            <div classNames="text">
                <h1>Enhance your business with our <span>Services !</span></h1>
                <h3>ZOHO <span ref={textRef}></span></h3>
            </div>
            <div>
                <a href="#portfolio">
                <img src={downarrow} alt="downarrow" />
                </a>
           
            </div>
           
            </div>
            
            <a href='#home'><i class="fas fa-arrow-circle-up arrow"></i></a>
        </div>
    )
}

export default Home
