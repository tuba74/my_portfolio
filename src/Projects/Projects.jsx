import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import airbnbImg from '../assets/airbnb.png';
import gptImg from '../assets/gpt.png';
import zerodhaImg from '../assets/zerodha.png';
import zerodhaVid from '../assets/zerodhaVid.mp4';
import WanderLustVid from '../assets/WanderLustVid.mp4';
// import zerodhaImg2 from './assets/zerodhaImg2.png'


function Projects() {
    const data = {
        gpt:{
            name: "GPT4.0- AI powered chatbot ", 
            info:"Built an AI-powered chatbot using a MERN-based frontend architecture.Integrated OpenAI APIs (including NVIDIA LLM models) to generate intelligent responses touser prompts.Implemented multiple chat threads displayed in a sidebar, enabling users to manage andswitch between conversations.Ensured that chat threads are securely accessible only to authenticated usersDeveloped RESTful APIs to handle CRUD operations (Create, Read, Update, Delete) for verifieduser chats",
            img:gptImg,
            Plink:"",
            Glink:"",
            Vlink:""

        },
        zerodha:{
            name: "Zerodha Clone", 
            info:"Tech Stack: React.js, Node.js, Express.js, MongoDB (MERN)Integrated real-time stock price data by fetching APIs to display current market trends and demand.Developed a dashboard to summarize the user’s total portfolio value and provide buy/selloptions for various stocks.Implemented JWT-based authentication and authorization to secure user access.",
            img:zerodhaImg,
            Plink:"https://zerodhat.netlify.app/",
            Glink:"https://github.com/tuba74/Trading_platform",
            // Vlink: "https://drive.google.com/file/d/12L2EZGqI6SvtB4K8emiOTeKdxUMYTB-s/view?usp=sharing"
            Vlink: zerodhaVid
        },
        airbnb:{
            name: "WanderLust (Hotel Booking website)", 
            info:"Tech Stack: JavaScript, Node.js, Express.js, EJS, MongoDB.Developed multiple routes for listing properties, allowing authenticated users to post reviewsfor places after signing in.Integrated map APIs to display real-time location data for different destinations.Enabled users to add and edit property listings, including uploading images of places",
            img:airbnbImg,
            Plink:"https://airbnb-project-j9te.onrender.com/listings",
            Glink:"https://github.com/tuba74/Wanderlust",
            // Vlink:"https://drive.google.com/file/d/1hO7T6tucpGEVdRBAJGShY-T0fhdQelEZ/view?usp=sharing"
            Vlink:WanderLustVid
        }
        
    }
    return (  
        <>
        <div className="main">
            <h1>My Projects</h1>
            <ProjectCard info={data.airbnb}/>
            <ProjectCard info={data.gpt}/>
            <ProjectCard info={data.zerodha}/>
            
        </div>
        </>
    );
}

export default Projects;