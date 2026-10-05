import React from 'react';
import './About.css'
import airbnbImg from "./assets/airbnb.png";
import zerodhaImg from "./assets/zerodha.png";
import zerodhaImg2 from "./assets/zerodha2.png";
import gptImg from "./assets/gpt.png";
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
// import About from './About';

function About() {
    const navigate = useNavigate();
    const ToProjects = () =>{
        
        // axios.get('/projects');
        navigate('/projects');
    }
    return ( 
        <>
        <div className="hero-container">
            <div className="item about" id='about'>
                <img src="./assets/hero.png" alt="" />
                <h1>About Me</h1>
                <p>Hi I'm Tuba Hashim</p>
                <p>I'm a passionate MERN Stack Developer who enjoys building responsive, interactive, and user-focused web applications. I work with React, JavaScript, Node.js, Express.js, and MongoDB, and have experience developing full-stack applications with REST APIs, authentication, and third-party API integrations.</p>
                {/* <Link to="/about">Click to learn more....</Link> */}

                    {/* I've built projects ranging from an AI-powered chatbot and a stock trading platform to a travel listing application, giving me hands-on experience with both frontend and backend development.

                    I enjoy solving problems, learning new technologies, and turning ideas into practical applications. I'm currently strengthening my DSA and software development skills while exploring AI/LLM integrations and modern web technologies. */}
            </div>
            
            <div className="item projects" onClick={ToProjects} id='projects'>
                <h2>My Projects</h2>
                <div className="project-container">
                    {/* <p>Working on some projects.......</p> */}
                    <div className="project-item"><img src={airbnbImg} alt="" /></div>
                    <div className="project-item"><img src={gptImg} alt="" /></div>
                    <div className="project-item"><img src={zerodhaImg} alt="" /></div>
                    <div className="project-item"><img src={zerodhaImg2} alt="" /></div>

                </div>
                <Link to="/projects">Click to see more...</Link>
            </div>
            
            <div className="item contact" id='contact'>
                <h4>Contacts</h4>
                <p><i class="fa-brands fa-linkedin-in"></i><a target="_blank" href="https://www.linkedin.com/in/tuba-hashim-4659b825b/">Linked in</a></p>
                <p><i class="fa-brands fa-square-github"></i><a target="_blank" href="https://github.com/tuba74">Github</a></p>
                <p><i class="fa-solid fa-envelope"></i><a target="_blank" href="mailto:tubah744@gmail.com">Gmail</a></p>
            </div>

            <div className="item contact">
                <h4>Certifications</h4>
                <p><i class="fa-brands fa-linkedin-in"></i><a href="https://www.linkedin.com/feed/update/urn:li:activity:7479221242668183552/" target="_blank" rel="noopener noreferrer">MERN Stack(ApnaCollege)</a></p>
                <p><i class="fa-brands fa-square-github"></i><a href="https://www.linkedin.com/feed/update/urn:li:activity:7479218934789869569/" target="_blank" rel="noopener noreferrer">Data Analytics and Simulation(Deloitte)</a></p>
                <p><i class="fa-solid fa-envelope"></i><a href="https://www.linkedin.com/feed/update/urn:li:activity:7508877297123516416/" target="_blank" rel="noopener noreferrer">ML using Python(IBM)</a></p>
            </div>

            <div className="item skills">
                <h4>Techstack</h4>
                <ul>
                    <p><li>HTML, JavaScript, React</li></p>
                    <p><li>Node.js, Express.js</li></p>
                    <p><li>MongoDB, MySQL</li></p>
                    <p><li>Git, GitHub, VS Code, Postman</li></p>
                </ul>
            </div>

            

        </div>
        {/* <About/> */}
        </>
     );
}

export default About;