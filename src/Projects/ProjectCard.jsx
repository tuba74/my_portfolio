import React from 'react';
import './ProjectCard.css';
// import airbnbImg from "../assets/airbnb.png";
function ProjectCard({info}) {
    return (  
        <div className="container">
            
            <div className="cardImg">
                <img src={info.img} alt="" />
            </div>
            <div className="cardInfo">
                <h2>{info.name}</h2>
                <p>{info.info}</p>
                <a href={info.Plink} target="_blank" rel="noopener noreferrer"><i>Project link</i></a>
                <a href={info.Vlink} target="_blank" rel="noopener noreferrer"><i>Demo Video</i></a>
                <a href={info.Glink} target="_blank" rel="noopener noreferrer"><i>github link</i></a>
            </div>
            <hr />
        </div>
    );
}

export default ProjectCard;