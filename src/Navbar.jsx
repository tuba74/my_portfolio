import React from 'react';
import './Navbar.css';
import Projects from './Projects/Projects';
import Resume from './assets/Tuba_Hashim.pdf';
function Navbar() {
    return ( 
        <>
            <div className="navbar">
                <div className="navTitle">
                    <i class="fa-solid fa-t"></i>
                    <a href="/#about">Tuba Hashim</a>
                </div>
                <div className="nav-items">
                        <a href="/#about">About me</a>
                        <a href="/#contact">Contact</a>
                        <a href={"/#projects"}>Projects</a>
                        <a href={Resume}>Resume</a>
                        <a href=""></a>
                    
                </div>
            </div>
        </>
     );
}

export default Navbar;