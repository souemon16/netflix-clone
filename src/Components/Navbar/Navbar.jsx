import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assests/logo.png';

const Navbar = () => {
     const [show, setShow] = useState(false);

     const transitionNavBar = () => {
         if(window.scrollY > 100) {
             setShow(false)
         } else {
             setShow(true)
         }
     };

     useEffect(() => {
         window.addEventListener("scroll", transitionNavBar);
         return () => window.removeEventListener("scroll", transitionNavBar);
     }, []);

     console.log(show);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img className="nav_logo" src={logo} alt="Netflix Logo" />
                <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>
        </div>
    );
};

export default Navbar;