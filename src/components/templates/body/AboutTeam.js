import React from 'react';
import './AboutUs.css';
import { TeamData } from '../../../assets/data/TeamData';


function AboutTeam() {
  return (
    <div className="about">
        <div className="heading">
            <h1 className="our">Our</h1>
            <h1> Leadership</h1>
            <h1 className="team">Team</h1>
        </div>
        <div className="card-container">
            
            {
                TeamData.map((member, index) => 
                    (
                    <>
                        <figure  key={index} className={member.cName}>
                        <img src={member.src} alt="" />
                        <figcaption className={member.fName}>
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </figcaption>
                        </figure>
                    </>
                    )
                )
            }
        </div>
        
    </div>
  )
}

export default AboutTeam
