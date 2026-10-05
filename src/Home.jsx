import React from 'react';
import './Home.css';
import portImg from "./assets/portfolioImg2.png";
import {Link} from 'react-router-dom';
import About from './About';
function Home() {
    return ( 
        <>
        <div className="hero">
            <div className="content">
                
                <div className="info">
                    <h1>Hey, I'm Tuba</h1>
                    <p>A web developer who is currently in last year of undergraduation. I've build multiple web based i.e. full-stack projects throughout my college year and eager to explore more in this field.</p>
                    <Link to="/about"><i>Click to learn more....</i></Link>
                </div>
                <div className="heroImg"><img src={portImg} alt="" /></div>
            </div>
        </div>
        
        {/* a web developer who is doing its undergraduation from BABU BANARASI DAS UNIVERSITY.
                I've build multiple web based i.e. full-stack projects throughout my college year and eager to explore more in this field.
                Currently, I'm in last year of my college and looking for internship and placement opportunities to gain knowledge
                from industrial experts, sharp my coding skills and get placed in  MNC. */}
                
                <About/>
        </>
     );
}

export default Home;